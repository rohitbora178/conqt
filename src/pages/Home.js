import React, { useEffect, useState } from 'react'
import styles from './Home.module.css';
import axios from 'axios';

const Home = () => {
    const [item, setItem] = useState('');
    const [supplier, setSupplier] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [itemData, setItemData] = useState([]);
    const [showdata, setShowData] = useState(true);
    const [selected, setSelected] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const resposne = await axios.post('https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers', {
        //         Item: item,
        //         Supplier: supplier,
        //         Date: date,
        //         Price: price
        //     });
        //     console.log(resposne.data);
        //     // setItemData(resposne)
        //     alert('Item added successfully');
        //     setItem('');
        //     setSupplier('');
        //     setDate('');
        //     setPrice('');
        // }
        // catch (error) {
        //     alert('Error adding item');
        // }
        const newItem = {
            item,
            supplier,
            date,
            price
        }
        setItemData([...itemData, newItem]);
        setItem('');
        setSupplier('');
        setDate('');
        setPrice('');
    }

        // const fetchData = async ()=>{
    //     try {
    //         const response = await axios.get('https://apis-technical-test.conqt.com/Api/Item-Supplier/Get-Items-Suppliers');
    //         setItemData(response.data);
    //     }
    //     catch (error) {
    //         alert('Error fetching data');
    //     }
    // }

    // useEffect(()=>(
    //     fetchData()
    // ) , [])

    const handleSelect = (id) => {
        setSelected((prev) => prev.includes(id) ? prev.filter((item) => item.id !== id) : [...prev, id]);
    }

    const handleDelete = () => {
        setItemData(itemData.filter((item) => !selected.includes(item.id)));
        setSelected([]);
    }



    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.container2}>
                    <input type='checkbox' checked={showdata} onChange={() => setShowData(true)} />
                    <p className={styles.text}>Item</p>
                </div>
                <div className={styles.container2}>
                    <input type='checkbox' checked={!showdata} onChange={() => setShowData(false)} />
                    <p className={styles.text}>Supplier</p>
                </div>
            </div>

            {showdata ? (
                <>
                    <div className={styles.itemDiv}>
                        <h1>Item Details</h1>

                        <form onSubmit={handleSubmit}>
                            <div className={styles.box}>
                                <div className={styles.boxInner}>
                                    <div className={styles.inputBox}>
                                        <label for="name">Item Name:</label>
                                        <input type="text" placeholder='Enter Item Name' className={styles.inputs} value={item} onChange={(e) => setItem(e.target.value)} />
                                    </div>

                                    <div className={styles.inputBox}>
                                        <label for="name">Quantity:</label>
                                        <input type="text" placeholder='Enter Quantity Name' className={styles.inputs} value={supplier} onChange={(e) => setSupplier(e.target.value)} />
                                    </div>
                                </div>

                                <div className={styles.boxInner}>
                                    <div className={styles.inputBox}>
                                        <label for="name">Unit Price:</label>
                                        <input type="number" placeholder='Enter Unit Price Name' className={styles.inputs} value={price} onChange={(e) => setPrice(e.target.value)} />
                                    </div>
                                    <div className={styles.inputBox}>
                                        <label for="name">Date of Submission:</label>
                                        <input type="date" placeholder='Enter Item Name' className={styles.inputs} value={date} onChange={(e) => setDate(e.target.value)} />
                                    </div>

                                </div>
                            </div>
                            <div className={styles.box2}>
                                <p className={styles.text3}>Submitted Data</p>
                                <p className={styles.text4}>The data submitted by users will be displayed below</p>
                                <button type='submit' className={styles.button1}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </>
            ) :
                <>
                    <div className={styles.supplierDiv}>
                        <h1>Supplier Details</h1>

                        <div className={styles.box}>
                            <div className={styles.boxInner}>
                                <div className={styles.inputBox}>
                                    <label >Supplier Name:</label>
                                    <input type="text" placeholder='Enter Supplier Name' className={styles.inputs} />
                                </div>

                                <div className={styles.inputBox}>
                                    <label >Company Name</label>
                                    <input type="text" placeholder='Enter Company Name' className={styles.inputs} />
                                </div>

                            </div>

                            <div className={styles.boxInner}>
                                <div className={styles.inputBox}>
                                    <label>City</label>
                                    <input type="text" placeholder='Enter Unit Price Name' className={styles.inputs} />
                                </div>
                                <div className={styles.inputBox}>
                                    <label >Email:</label>
                                    <input type="email" placeholder='Enter Item Name' className={styles.inputs} />
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            }

            <div className={styles.box3}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p>Updated Data</p>
                    <button onClick={handleDelete}>Clear</button>
                </div>

                <table border='1'>
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Item</th>
                            <th>Supplier</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemData.map((item) => (
                            <tr key={item.id}>
                                <td><input type='checkbox' checked={selected.includes(item.id)} onChange={() => handleSelect(item.id)} /></td>
                                <td>{item.item}</td>
                                <td>{item.supplier}</td>
                                <td>{item.date}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home