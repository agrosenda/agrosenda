// routes
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const apiRoutes = require("./routes/apiRoutes")

// require metodo path
const path = require("path");

// config templete engina y ruta elementos estaticos
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));

// indicamos los routes
app.use("/",mainRoutes);
app.use("/products",productsRoutes);
app.use("/user", usersRoutes);
app.use("/api",apiRoutes);


// indicamos como proceder ante el error 404
app.use((req, res, next) => {
    res.status(404).render('not-found');
})

// levantamos el server
app.listen(3000,()=>{
    console.log("funcionanado en el puerto 3000");
})
