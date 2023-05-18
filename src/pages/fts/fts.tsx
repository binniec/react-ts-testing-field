import React from 'react';
import './fts.scss';

class FTSPage extends React.Component {

    public testObjects = [
        { booth: "105", inventoryCode: "0001", description: "test", quantity: 1, price: 499.00, discount: 0 },
        { booth: "221", inventoryCode: "A400", description: "test", quantity: 1, price: 335.00, discount: 0 },
        { booth: "106", inventoryCode: "112Q", description: "test", quantity: 1, price: 520.00, discount: 0 },
        { booth: "323", inventoryCode: "34P", description: "test", quantity: 1, price: 1125.00, discount: 0 },
    ]

    private tableItems = new Array<React.JSX.Element>();

    private renderTableList(): React.JSX.Element[] {

        this.tableItems = new Array<React.JSX.Element>();

        for (let item of this.testObjects) {
            this.tableItems.push(
                <div className='fts-table-item'>
                    <input type='number' data-name="booth" defaultValue={item.booth} />
                    <input data-name="inventoryCode" defaultValue={item.inventoryCode} />
                    <input data-name="description" defaultValue={item.description} />
                    <input type='number' data-name="quantity" defaultValue={item.quantity} />
                    <input type='number' step='0.05' data-name="price" defaultValue={item.price.toFixed(2)} />
                    <input type='number' min="0" max="100" data-name='discount' defaultValue={item.discount} />
                    <input tabIndex={-1} readOnly data-name='total'  defaultValue={(item.price - (item.price * item.discount) * item.quantity).toFixed(2)}/>
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
                        <label data-name='booth'>Booth #</label>
                        <label data-name='inventoryCode'>Inv. #</label>
                        <label data-name='description'>Description</label>
                        <label data-name='quantity'>Qty.</label>
                        <label data-name='price'>Price</label>
                        <label data-name='discount'>Pct.</label>
                        <label data-name='total'>Total</label>
                    </div>

                    <div>
                        {this.renderTableList()}
                    </div>

                    <button onClick={this.addTableItem} className='fts-button'>+ New</button>

                </div>
                <div className='fts-side-panel-container'>
                        <div>
                            <label>Discount:</label>
                            <span>
                                <input placeholder='0' maxLength={2} defaultValue={0}/>
                            </span>
                        </div>

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

                        <div className="fts-select">
                            <label>Payment Method:</label>
                            <span>
                                <select>
                                    <option>Debit</option>
                                    <option>Credit</option>
                                    <option>Cash</option>
                                </select>
                            </span>
                        </div>

                    <button className='fts-button'>Complete Transaction</button>
                </div>

            </div>
        );
    }
}

export default FTSPage;