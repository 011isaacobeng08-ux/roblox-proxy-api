const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

app.get("/followers/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const response = await fetch(
      `https://friends.roblox.com/v1/users/${userId}/followers/count`
    );

    if (!response.ok) {
      return res.status(500).json({ error: "Roblox API error" });
    }

    const data = await response.json();

    res.json({
      followers: data.count
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy API running on port ${PORT}`);
});
