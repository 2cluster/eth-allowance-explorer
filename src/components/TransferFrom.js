import React from "react";

export function TransferFrom({ transferFromTokens, tokenSymbol, accounts }) {
  return (
    <div>
      <h4>TransferFrom</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const from = formData.get("from");
          const to = formData.get("to");
          const amount = formData.get("amount");

          if (from && to && amount) {
            transferFromTokens(from, to, amount);
          }
        }}
      >
        <div className="form-group">
          <label>Amount of {tokenSymbol}</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            placeholder="1"
            required
          />
        </div>
        <div className="form-group">
        <label>Sender</label>
          <select name="from" className="form-control">
            <option name="from" value={accounts.borrower}>borrower</option>
            <option name="from" value={accounts.lender}>lender</option>
          </select>
        </div>
        <div className="form-group">
        <label>Recipient</label>
          <select name="to" className="form-control">
            <option name="to" value={accounts.borrower}>borrower</option>
            <option name="to" value={accounts.lender}>lender</option>
          </select>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Transfer" />
        </div>
      </form>
    </div>
  );
}
