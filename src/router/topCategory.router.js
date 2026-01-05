

const router = express.Router();

router.post("/", (res, req) => { res.status(200).send("Server is Serving ") })
router.get("/", () => {

})
router.patch("/:id",(res,req)=>{
    res.status(200).message("hello from server");
})
router.delete("/:id",(res,req)=>{
    res.status(200).message("Hello from delete section ");
})
module.exports=router;