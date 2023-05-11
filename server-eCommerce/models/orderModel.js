const Order = require('../schemas/orderSchema');

exports.addOrder = async (req, res) => {
  const products = req.body.products;
  const userId = req.userInfo._id;

  if (!products) {
    return res.status(400).json({ message: 'You need to enter all fields' });
  }

  const orderProducts = products.map(product => ({
    productId: product.productId,
    quantity: product.quantity
  }));

  const order = new Order({ userId, products: orderProducts });

  try {
    const savedOrder = await order.save();
    res.status(201).json({
      message: 'Order was created',
      order: savedOrder
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong when adding the order, are you sure its the correct product Id??',
      err: err.message
    });
  }
};


exports.getOrders = async (req, res) => {
  const userId = req.userInfo._id;

  try {
    const orders = await Order.find({ userId }).populate('products.productId');
    res.status(200).json({
      message: 'All your orders are fetched friend!',
      orders: orders
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong when fetching the orders friend!',
      err: err.message
    });
  }
};


exports.deleteOrder = async (req, res) => {
  const userId = req.userInfo._id;

  try {
    const deletedOrders = await Order.deleteMany({ userId });
    res.status(200).json({
      message: 'All your orders were successfully deleted',
      orders: deletedOrders
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong when deleting the orders',
      err: err.message
    });
  }
};



