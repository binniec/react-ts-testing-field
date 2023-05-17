import React from 'react';
import './fts.scss';

class FTSPage extends React.Component {

    public testObjects = [
        { booth: "105", inventoryCode: "0001", description: "test", quantity: 1, price: 4.00, discount: 0 },
        { booth: "221", inventoryCode: "A400", description: "test", quantity: 1, price: 35.00, discount: 0 },
        { booth: "106", inventoryCode: "112Q", description: "test", quantity: 1, price: 50.00, discount: 0 },
        { booth: "323", inventoryCode: "34P", description: "test", quantity: 1, price: 15.00, discount: 0 },
    ]

    private tableItems = new Array<React.JSX.Element>();

    private renderTableList(): React.JSX.Element[] {

        for (let item of this.testObjects) {
            this.tableItems.push(
                <div className='fts-outline fts-table-item'>
                    <input type='number' data-name="booth" defaultValue={item.booth} />
                    <input data-name="inventoryCode" defaultValue={item.inventoryCode} />
                    <input data-name="description" defaultValue={item.description} />
                    <input type='number' data-name="quantity" defaultValue={item.quantity} />
                    <input type='number' data-name="price" defaultValue={item.price.toFixed(2)} />
                    <input data-name='discount' defaultValue={item.discount} />
                    <input tabIndex={-1} readOnly data-name='total' className='fts-label' defaultValue={(item.price - (item.price * item.discount) * item.quantity).toFixed(2)}/>
                </div>);
        }

        return this.tableItems;
    }

    private addTableItem() {
        this.testObjects.push({ booth: "", inventoryCode: "", description: "", quantity: 1, price: 0, discount: 0 })
    }

    private getSubtotal(): number {
        let subtotal = 0;

        for (let item of this.testObjects) {
            subtotal += item.price;
        }

        return subtotal;
    }

    private getSalesTax(): number {
        let subtotal = 0;

        for (let item of this.testObjects) {
            subtotal += item.price;
        }

        return subtotal * 0.13;
    }

    render() {
        return (
            <div className="fts-outline fts-container">

                <div className='fts-outline fts-table-container'>
                    <div className='fts-outline fts-table-header'>
                        <label data-name='booth' className='fts-label'>Booth #</label>
                        <label data-name='inventoryCode' className='fts-label'>Inv. #</label>
                        <label data-name='description' className='fts-label'>Description</label>
                        <label data-name='quantity' className='fts-label'>Qty.</label>
                        <label data-name='price' className='fts-label'>Price</label>
                        <label data-name='discount' className='fts-label'>Pct.</label>
                        <label data-name='total' className='fts-label'>Total</label>
                    </div>

                    {this.renderTableList()}

                    <button onClick={this.addTableItem} className='fts-button'>+ New</button>

                </div>
                <div className='fts-side-panel-container'>
                        <div>
                            <label>Discount:</label>
                            <div>
                                <input maxLength={2} defaultValue={0}/>
                            </div>
                        </div>

                        <span></span>

                        <div>
                            <label>Sub-Total:</label>
                            <label>${this.getSubtotal().toFixed(2)}</label>
                        </div>
                        <div>
                            <label>GST/HST:</label>
                            <label>${this.getSalesTax().toFixed(2)}</label>
                        </div>
                        <div>
                            <label>Total:</label>
                            <label>${(this.getSubtotal() + this.getSalesTax()).toFixed(2)}</label>
                        </div>

                        <div>
                            <label>Payment Method:</label>
                            <select>
                                <option>Debit</option>
                                <option>Credit</option>
                                <option>Cash</option>
                            </select>
                        </div>

                    <button className='fts-button'>Complete Transaction</button>
                </div>

            </div>
        );
    }
}

export default FTSPage;