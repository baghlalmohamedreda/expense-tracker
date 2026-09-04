"use client"

import React from "react"
import { useState, useEffect } from "react"

function EditTransactionForm({
  transactionid,
  setIsedit,
  transaction
}) {

  const [formData, setFormData] = useState({
    category_id: "",
    title: "",
    amount: "",
    type: "",
    description: ""
  })

  useEffect(() => {

    function getTransactionEdite() {

      const data = transaction.find(
        (e) => e.id === transactionid
      )

      if (data) {
        setFormData({
          category_id: data.category_id,
          title: data.title,
          amount: data.amount,
          type: data.type,
          description: data.description
        })
      }
    }

    getTransactionEdite()

  }, [transactionid, transaction])


  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }


  function handleSubmit(e) {

    e.preventDefault()

    console.log(formData)
    setIsedit(false)

   

  }


  return (

    <form
      onSubmit={handleSubmit}
      className="w-full"
    >

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-900">
          Edit Transaction
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Update the information of this transaction.
        </p>

      </div>


      <div className="mb-4">

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Transaction title"
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            text-sm
            outline-none
            transition
            focus:border-slate-400
            focus:ring-2
            focus:ring-slate-100
          "
        />

      </div>


      <div className="mb-4">

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Amount
        </label>

        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="0.00"
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            text-sm
            outline-none
            transition
            focus:border-slate-400
            focus:ring-2
            focus:ring-slate-100
          "
        />

      </div>


      <div className="mb-4 grid grid-cols-2 gap-4">

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Type
          </label>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="
              w-full
              cursor-pointer
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              text-sm
              text-slate-700
              outline-none
              focus:ring-2
              focus:ring-slate-100
            "
          >

            <option value="">
              Select type
            </option>

            <option value="expense">
              Expense
            </option>

            <option value="income">
              Income
            </option>

          </select>

        </div>


        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>

          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="
              w-full
              cursor-pointer
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              text-sm
              text-slate-700
              outline-none
              focus:ring-2
              focus:ring-slate-100
            "
          >

            <option value="">
              Select category
            </option>

            <option value="1">
              Food
            </option>

            <option value="2">
              Transport
            </option>

            <option value="3">
              Shopping
            </option>

            <option value="4">
              Entertainment
            </option>

          </select>

        </div>

      </div>


      <div className="mb-6">

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Description
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Transaction description..."
          rows={4}
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            text-sm
            outline-none
            transition
            focus:border-slate-400
            focus:ring-2
            focus:ring-slate-100
          "
        />

      </div>


      <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={() => setIsedit(false)}
          className="
            cursor-pointer
            rounded-xl
            border
            border-slate-200
            bg-white
            px-5
            py-2.5
            text-sm
            font-medium
            text-slate-700
            transition
            hover:bg-slate-50
          "
        >
          Cancel
        </button>

        <button
          type="submit"
          className="
            cursor-pointer
            rounded-xl
            bg-slate-900
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-slate-800
          "
        >
          Save Changes
        </button>

      </div>

    </form>
  )
}

export default EditTransactionForm