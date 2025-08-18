import { ChangeEvent } from "react";
import Header from "../../components/header/Header";
import "./Transactions.scss";
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

            {/* Booth Number */}
            <input 
                type='number'
                placeholder='Booth'
                data-name="booth"
                value={item.booth}
                onChange={e => { updateItemBooth(index, e) }} />

            {/* Inventory Code */}
            <input 
                data-name="inventoryCode"
                placeholder='Inv.'
                value={item.inventoryCode}
                onChange={e => { updateItemInventory(index, e) }} />

            {/* Description */}
            <input 
                data-name="description"
                placeholder='Description'
                value={item.description}
                onChange={e => { updateItemDesc(index, e) }} />

            {/* Quantity */}
            <input 
                type='number'
                step='1'
                placeholder='1'
                data-name="quantity"
                value={item.quantity}
                onChange={e => { updateItemQuantity(index, e) }} />

            {/* Price */}
            <input 
                type='number'
                step='0.05'
                data-name="price"
                defaultValue={item.price.toFixed(2)}
                onChange={e => { updateItemPrice(index, e) }}
                onBlur={e => e.target.value = e.target.valueAsNumber.toFixed(2)}/>

            {/* Discount */}
            <input 
                type='number'
                step='1'
                placeholder='0'
                data-name='discount'
                maxLength={2} value={item.discount}
                onChange={e => { updateItemDiscount(index, e) }} />

            {/* Total */}
            <input 
                tabIndex={-1}
                readOnly
                data-name='total'
                value={processItemTotal(item)} />
        </div>
    )
}


function processItemTotal(item: TransactionItem) {

    return ((item.price - (item.price * (item.discount ? item.discount : 0) / 100)) * item.quantity).toFixed(2)

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

        if (index === itemIndex ) {
            return { ...item, discount: element.valueAsNumber };
        } else if (element.valueAsNumber < 0) {
            return { ...item, discount: 1 };
        } else {
            return item;
        }
    }));
}


function updateItemQuantity(itemIndex: number, event: ChangeEvent): void {

    const element = event.target as HTMLInputElement;

    setList(list.map((item, index) => {

        if (index === itemIndex && element.valueAsNumber > 0) {
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
        subtotal += ((item.price - (item.price * (item.discount ? item.discount : 0) / 100)) * item.quantity)
    });

    return subtotal;
}

function getSalesTax(): number {
    let subtotal = 0;

    list.map( item => {
        subtotal += ((item.price - (item.price * (item.discount ? item.discount : 0) / 100)) * item.quantity);
    });

    return subtotal * 0.13;
}

async function addItem() {
    setList([...list,
    { booth: "", inventoryCode: "", description: "", quantity: 1, price: 0, discount: 0 }
    ]);

    const element = document.getElementById('fts-list')!;

    // Move focus to new item, booth input
    setTimeout(() => {
        // ((element.lastElementChild as HTMLElement).firstElementChild as HTMLElement).focus();

        (element.children[list.length].firstElementChild as HTMLElement).focus()
    });
}

    return (
        <>
            <Header />
            <main className="fts-outline fts-container">

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

                        <div id='fts-list'>

                            {itemList()}

                        </div>

                        <button onClick={() => { addItem() }} className='fts-button'>+ New</button>

                    </div>
                    <div className='fts-side-panel-container'>
                        <div>
                            <label>Discount:</label>
                            <span>
                                <input placeholder='0' step='1' maxLength={2} />
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
            </main>
        </>

    )
}

