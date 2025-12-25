import React from "react";

function UI() {
  return (
    <>
      <main className="bg-red-300 w-full h-10 flex items-center justify-center ">
        <h1 className="text-2xl">expense Tracker</h1>
      </main>

      <section className="tracker-body ">
        <div className="tracker-row border flex flex-row px-36 w-[90rem] justify-between mx-auto mt-20 h-100  flex-1">
          <div className="tracker-left-side border w-150 space-y-6">


<form action="">

            <div className="tracker-input-box flex flex-col ml-10">
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" className="w-full h-10" />
            </div>

            <div className="tracker-input-box flex flex-col ml-10">
              <label htmlFor="">quantity</label>
              <input type="text" name="" id=""  className="w-full h-10" />
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
              <input type="text" name="" id="" className="w-full h-20"/>
            </div>

            <button type="submit" className="bg-red-400 ml-10 mt-10">submit</button>
</form>
          </div>

          
          
          <div className="tracker-right-side border w-90">
              <h1>Total Expense</h1>




          </div>
        </div>
      </section>
    </>
  );
}

export default UI;
