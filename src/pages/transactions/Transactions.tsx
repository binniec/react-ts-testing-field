import { ChangeEvent } from "react";
import Header from "../../components/header/Header";
import "./transactions.css";
import React from "react";

interface TransactionItem {
    booth: string, 
    inventoryCode: string,
    description: string,
    quantity: number,
    price: number,
    discount: number

}

export default function Transactions() {

const [list, setList] = React.useState<TransactionItem[]>(
    [
        { booth: "105", inventoryCode: "0001", description: "test", quantity: 1, price: 499.00, discount: 0 },
        { booth: "221", inventoryCode: "A400", description: "test", quantity: 1, price: 335.00, discount: 0 },
        { booth: "106", inventoryCode: "112Q", description: "test", quantity: 1, price: 520.00, discount: 0 },
        { booth: "323", inventoryCode: "34P", description: "test", quantity: 1, price: 1125.00, discount: 0 },
    ]
);

function itemList() {

    return list.map((item, index) =>
        <div className='fts-table-item' key={index}>
            <input type='number' data-name="booth" value={item.booth} onChange={e => { updateItemBooth(index, e) }} />
            <input data-name="inventoryCode" value={item.inventoryCode} onChange={e => { updateItemInventory(index, e) }} />
            <input data-name="description" value={item.description} onChange={e => { updateItemDesc(index, e) }} />
            <input type='number' data-name="quantity" value={item.quantity} onChange={e => { updateItemQuantity(index, e) }} />
            <input type='number' step='0.05' data-name="price" value={item.price.toFixed(2)} onChange={e => { updateItemPrice(index, e) }} />
            <input type='number' placeholder='0' data-name='discount' value={item.discount} onChange={e => { updateItemDiscount(index, e) }} />
            <input tabIndex={-1} readOnly data-name='total' value={processItemTotal(item)} />
        </div>
    )
}


function processItemTotal(item: TransactionItem) {

    return (item.price - (item.price * (item.discount ? item.discount : 0) / 100) * item.quantity).toFixed(2)

}

function updateItemBooth(itemIndex: number, event: ChangeEvent): void {

    const element = event.target as HTMLInputElement;

    setList(list.map((item, index) => {

        if (index === itemIndex) {
            return { ...item, booth: element.value };
        } else {
            return item;
        }
    }));
}

function updateItemInventory(itemIndex: number, event: ChangeEvent): void {

    const element = event.target as HTMLInputElement;

    setList(list.map((item, index) => {

        if (index === itemIndex) {
            return { ...item, inventoryCode: element.value };
        } else {
            return item;
        }
    }));
}

function updateItemDesc(itemIndex: number, event: ChangeEvent): void {

    const element = event.target as HTMLInputElement;

    setList(list.map((item, index) => {

        if (index === itemIndex) {
            return { ...item, description: element.value };
        } else {
            return item;
        }
    }));
}

function updateItemPrice(itemIndex: number, event: ChangeEvent): void {

    const element = event.target as HTMLInputElement;

    setList(list.map((item, index) => {

        if (index === itemIndex) {
            return { ...item, price: element.valueAsNumber };
        } else {
            return item;
        }
    }));
}

function updateItemDiscount(itemIndex: number, event: ChangeEvent): void {

    const element = event.target as HTMLInputElement;

    setList(list.map((item, index) => {

        if (index === itemIndex) {
            return { ...item, discount: element.valueAsNumber };
        } else if (element.valueAsNumber < 0) {
            return { ...item, quantity: 1 };
        } else {
            return item;
        }
    }));
}


function updateItemQuantity(itemIndex: number, event: ChangeEvent): void {

    const element = event.target as HTMLInputElement;

    setList(list.map((item, index) => {

        if (index === itemIndex) {
            return { ...item, quantity: Math.floor(element.valueAsNumber) };
        } else if (element.valueAsNumber < 0) {
            return { ...item, quantity: 1 };
        } else {
            return item;
        }
    }));
}


function getSubtotal(): number {
    let subtotal = 0;

    list.map( item => {
        subtotal += item.price;
    });

    return subtotal;
}

function getSalesTax(): number {
    let subtotal = 0;

    list.map( item => {
        subtotal += item.price;
    });

    return subtotal * 0.13;
}

function addItem() {
    setList([...list,
    { booth: "", inventoryCode: "", description: "", quantity: 1, price: 0, discount: 0 }
    ]);
}

    return (
        <>
            <Header />
            <section className="fts-outline fts-container">

                    <div className='fts-outline fts-table-container'>
                        <div className='fts-outline fts-table-header'>
                            <label data-name='booth'>Booth #</label>
                            <label data-name='inventoryCode'>Inv. #</label>
                            <label data-name='description'>Description</label>
                            <label data-name='quantity'>Qty.</label>
                            <label data-name='price'>Price</label>
                            <label data-name='discount'>Pct.</label>
                            <label data-name='total'>Total</label>
                        </div>

                        <div>

                            {itemList()}

                        </div>

                        <button onClick={() => { addItem() }} className='fts-button'>+ New</button>

                    </div>
                    <div className='fts-side-panel-container'>
                        <div>
                            <label>Discount:</label>
                            <span>
                                <input placeholder='0' maxLength={2} />
                            </span>
                        </div>

                        <div>
                            <label>Sub-Total:</label>
                            <label>${getSubtotal().toFixed(2)}</label>
                        </div>
                        <div>
                            <label>GST/HST:</label>
                            <label>${getSalesTax().toFixed(2)}</label>
                        </div>
                        <div>
                            <label>Total:</label>
                            <label>${(getSubtotal() + getSalesTax()).toFixed(2)}</label>
                        </div>

                        <button className='fts-button'>Complete Transaction</button>
                    </div>
            </section>
        </>

    )
}

