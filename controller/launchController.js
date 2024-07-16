import launchItem from "../model/launchModel.js"; 



export const saveToDB = function (req, res) {
  const { data } = req?.body;

  try {
    const newItem = new launchItem({
      data
    });

    const item = newItem.save();
    console.debug("Data saved successfully", item)
    res.status(200).json({ message: "Data saved successfully" });
  } catch (err) { 
    res.status(500).json({ message: err.message });
  }
};

export const fetchLaunchData = async (req, res) => {
  try {
    const data = await launchItem.find()
    if (data.length === 0) {
      return res.status(404).json({ message: "data not Found." })
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: " Internal Server Error. " })
  }
}


export const deleteFromDB = async (req, res) =>{
  const { id } = req?.params;
  try {
    const item = await launchItem.findById(id);
    if (!item) return res.status(404).json({ message: 'Item not found' });    
    await item.collection.drop();
    res.json({ message: 'Item removed from db successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}