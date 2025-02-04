import React from 'react';
import './fts.scss';

export default function FTSPage() {

    const [list, setList] = React.useState(
        [
            { booth: "105", inventoryCode: "0001", description: "test", quantity: 1, price: 499.00, discount: 0 },
            { booth: "221", inventoryCode: "A400", description: "test", quantity: 1, price: 335.00, discount: 0 },
            { booth: "106", inventoryCode: "112Q", description: "test", quantity: 1, price: 520.00, discount: 0 },
            { booth: "323", inventoryCode: "34P", description: "test", quantity: 1, price: 1125.00, discount: 0 },
        ]
    );

    function getSubtotal(): number {
        let subtotal = 0;

        for (const item of list) {
            subtotal += item.price;
        }

        return subtotal;
    }

    function getSalesTax(): number {
        let subtotal = 0;

        for (const item of list) {
            subtotal += item.price;
        }

        return subtotal * 0.13;
    }

    return (
        <div className="fts-outline fts-container">

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

                    { list.map(item =>

                        <div className='fts-table-item' key={item.booth}>
                            <input type='number' data-name="booth" defaultValue={item.booth} />
                            <input data-name="inventoryCode" defaultValue={item.inventoryCode} />
                            <input data-name="description" defaultValue={item.description} />
                            <input type='number' data-name="quantity" defaultValue={item.quantity} />
                            <input type='number' step='0.05' data-name="price" defaultValue={item.price.toFixed(2)} />
                            <input type='number' placeholder='0' data-name='discount' defaultValue={item.discount} />
                            <input tabIndex={-1} readOnly data-name='total' defaultValue={(item.price - (item.price * item.discount) * item.quantity).toFixed(2)} />
                        </div>
                    )}

                </div>

                <button onClick={() => {
                    setList([
                        ...list,
                        { booth: "", inventoryCode: "", description: "", quantity: 1, price: 0, discount: 0 }
                    ]);
                }
                    
                } className='fts-button'>+ New</button>

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

        </div>
    );
}

