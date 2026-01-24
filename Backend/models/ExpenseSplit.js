const mongoose = require("mongoose");

const expenseSplitSchema = new mongoose.Schema(
  {
    expenseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expense",
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("ExpenseSplit", expenseSplitSchema);
