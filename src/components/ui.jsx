import React, { useState } from "react";

function UI() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expense, setExpense] = useState([]);

  function SubmitExpense(e) {
    e.preventDefault();
    if (!name && !price && !quantity) return;
    const newItem = { name, price, quantity };
    setExpense((prev) => [...prev, newItem]);
    setName("");
    setPrice("");
    setQuantity("");
  }

  function handleDelete(index) {
    setExpense((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      <main className="bg-red-300 w-full h-10 flex items-center justify-center ">
        <h1 className="text-2xl">expense Tracker</h1>
      </main>

      <section className="tracker-body ">
        <div className="tracker-row border flex flex-row px-36 w-[90rem] justify-between mx-auto mt-20 h-100  flex-1">
          <div className="tracker-left-side border w-150 space-y-6">
            <form action="" onSubmit={SubmitExpense}>
              <div className="tracker-input-box flex flex-col ml-10">
                <label htmlFor="">Name</label>
                <input type="text" name="item-name" id="" className="w-full h-10" value={name} onChange={(e) => { setName(e.target.value); }} />
              </div>

              <div className="tracker-input-box flex flex-col ml-10">
                <label htmlFor="">Price</label>
                <input type="number" name="price" id="" className="w-full h-10" value={price} onChange={(e) => { setPrice(e.target.value); }} />
              </div>

              <div className="tracker-input-box flex flex-col ml-10">
                <label htmlFor="">quantity</label>
                <input type="number" name="" id="" className="w-full h-10" value={quantity} onChange={(e) => { setQuantity(e.target.value); }} />
              </div>

              <div className="tracker-input-box flex flex-col ml-10">
                <label htmlFor="">Category</label>
                <select name="" id="category">
                  <option value="">fruit</option>
                  <option value="">Vegetable</option>
                  <option value="">Grocessry</option>
                  <option value="">Medicine</option>
                  <option value="">Utility</option>
                </select>
              </div>

              <div className="tracker-input-box flex flex-col ml-10">
                <label htmlFor="">Description</label>
                <input type="text" name="" id="" className="w-full h-20" />
              </div>

              <button type="submit" className="bg-red-400 ml-10 mt-10">
                submit
              </button>
            </form>
          </div>

          <div className="tracker-right-side border w-90">
            <h1 className="text-center mt-2 text-2xl">Total Expense</h1>
            <div className="expense-box">
              {
                expense.map((item, index) => {
                  return (
                    <div key={index} className="box">
                      <div className="box-text">
                        <h2>{item.name}</h2>
                        <h3>{item.price}</h3>
                      </div>

                      <button onClick={() => handleDelete(index)}>delete</button>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UI;

