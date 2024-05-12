
//const heading = React.createElement("h1",{"id":"heading"},"Hello from heading!");

const parent = React.createElement("div",{"id":"parent"},React.createElement("div",{"id":"child"},
[React.createElement("h1",{},"Hello from h1!"),
React.createElement("h2",{},"Hello from h2!")
])
);
const root = ReactDOM.createRoot(document.getElementById("root"));  
console.log(parent)
root.render(parent);
