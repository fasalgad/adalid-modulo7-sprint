

export const home = async (req, res) => {
  res.render("home", {
    layout: "main",
    title: "Home"
  });
}