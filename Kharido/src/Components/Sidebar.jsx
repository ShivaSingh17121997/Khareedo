import React from 'react'

export default function Sidebar({ handleFilterByCategory }) {


    return (

        <div>
            {/* filter by categoty */}
            <div style={{ textAlign: "left", padding: "10px" }}>
                <h3>Filter by Category</h3>
                <label>
                    <input type="radio" name="category" onChange={() => handleFilterByCategory("")} />
                    All
                </label> <br />
                <label>
                    <input type="radio" name="category" onChange={() => handleFilterByCategory("smartphones")} />
                    Smartphones
                </label> <br />

                <label>
                    <input type="radio" name="category" onChange={() => handleFilterByCategory("laptops")} />
                    Laptops
                </label>
                <br />

                <label>
                    <input type="radio" name="category" onChange={() => handleFilterByCategory("skincare")} />
                    Fragrances
                </label><br />
            </div>



            <div>
                <h3>Filter by Brand</h3>
                <label>
                    <input type="checkbox" />
                    Smartphones
                </label> <br />

                <label>
                    <input type="checkbox" />
                    Laptops
                </label>
                <br />

                <label>
                    <input type="checkbox" />
                    Fragrances
                </label><br />
            </div>

            <div>
                <h3>Filter by Brand</h3>
                <label>
                    <input type="checkbox" />
                    Smartphones
                </label> <br />

                <label>
                    <input type="checkbox" />
                    Laptops
                </label>
                <br />

                <label>
                    <input type="checkbox" />
                    Fragrances
                </label><br />
            </div>

            <div>
                <h3>Filter by Price</h3>
                <label>
                    <input type="checkbox" />
                    More then 100
                </label> <br />

                <label>
                    <input type="checkbox" />
                    Less than 100
                </label>
                <br />

            </div>




        </div>
    )
}
