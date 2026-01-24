const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true
    },
    paidBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    },
    description: {
      type: String
    },
    splitType: {
      type: String,
      enum: ["EQUAL", "EXACT", "PERCENT"],
      default: "EQUAL"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Expense", expenseSchema);
