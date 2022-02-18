const Order = (props) => {
  const createNewOrder = () => {
    const sendOrder = (newOrder) => {
      console.log(newOrder);
    };
  };
};

export default Order;

//   const createTask = (taskText, taskData) => {
//     const generatedId = taskData.name; // firebase-specific => "name" contains generated id
//     const createdTask = { id: generatedId, text: taskText };

//   };

//   const enterTaskHandler = async (taskText) => {
//     sendTaskRequest(
//       {
//         url: "https://react-http-909d1-default-rtdb.firebaseio.com/tasks.json",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: { text: taskText },
//       },
//       createTask.bind(null, taskText)
//     );
//   };
