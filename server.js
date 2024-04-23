// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const Block = require('./Models/seminar/block');
// const Staffroom= require("./Models/staffrooms/staffroom")
// const cors =require('cors');
// const univapi=require('./apis/Universalapi')

// const app = express();

// app.use(bodyParser.json());
// app.use(cors())
// // Connect to MongoDB
// mongoose.connect('mongodb+srv://miniproject1729:miniproject1729@cluster0.ylskpxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(()=>{
//     console.log("connected to db...");
// }).catch((err)=>{
//     console.log(err)
// });

// // Routes for CRUD operations on blocks

// app.post('/blocks', async (req, res) => {
//   try {
//     const block = await Block.create(req.body);
//     res.json(block);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.put('/blocks/:id', async (req, res) => {
//   try {
//     const block = await Block.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(block);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.delete('/blocks/:id', async (req, res) => {
//   try {
//     await Block.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Block deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get('/blocks', async (req, res) => {
//   try {
//     const blocks = await Block.find();
//     res.json(blocks);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// app.post('/staffrooms', async (req, res) => {
//     try {
//       const block = await Staffroom.create(req.body);
//       res.json(block);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });
  
//   app.put('/staffrooms/:id', async (req, res) => {
//     try {
//       const block = await Staffroom.findByIdAndUpdate(req.params.id, req.body, { new: true });
//       res.json(block);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });
  
//   app.delete('/staffrooms/:id', async (req, res) => {
//     try {
//       await Staffroom.findByIdAndDelete(req.params.id);
//       res.json({ message: 'Block deleted successfully' });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });
  
//   app.get('/staffrooms', async (req, res) => {
//     try {
//       const blocks = await Staffroom.find();
//       res.json(blocks);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });

// app.use("/universal",univapi)
  
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Blockroutes = require('./apis/Universalapi');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://miniproject1729:miniproject1729@cluster0.ylskpxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Mount routes
app.use('/api/block', Blockroutes);

const PORT = process.env.PORT || 8010;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
