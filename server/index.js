const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//=================== MIDLEWARE ==================================
app.use(cors());
app.use(express.json());
//================================================================

//=================== ROUTES =====================================

//create item
app.post("/items", async(req, res) => {
    try {
        const item = req.body;
        const newItem = await pool.query("INSERT INTO item (title, description, image) VALUES($1, $2, $3) RETURNING * ", [item.title, item.description, item.image]);

        res.json(newItem.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all items
app.get("/items", async(req, res) => {
    try {
        const items = await pool.query("SELECT * FROM item");
        res.json(items.rows)
    } catch (err) {
        console.log(err.message)
    }

});

//get item by id
app.get("/item/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const item = await pool.query("SELECT * FROM item WHERE id = $1", [id]);
        res.json(item.rows[0]);

    } catch (err) {
        console.log(err.message)
    }
})

//update item
app.put("/item/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const title = req.body.title;
        const description = req.body.description;
        const image = req.body.image;

        const item = await pool.query("UPDATE item SET title = $1, description = $2, image = $3 WHERE id = $4", [title, description, image, id]);
        res.json(200, "item updated successfully");

    } catch (err) {
        console.log(err.message);
    }
})

//delete item
app.delete("/item/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const item = await pool.query("DELETE FROM item WHERE id = $1", [id]);
        res.json(200, "item deleted successfully");

    } catch (err) {
        console.log(err.message);
    }
})


//================================================================


app.listen(5000, () => {
    console.log("server started on port 5000");
})