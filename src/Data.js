const data = {
  tables: ["Customer", "Product"],
  queries: {
    Customer: [
      "Select * from Customer",
      "Select * from Customer where contactTitle = 'Accounting Manager'",
    ],
    Product: [
      "Select * from Product",
      "Select * from Product where unitPrice = 18.00",
    ],
  },
};

export default data;
