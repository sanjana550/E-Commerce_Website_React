const ProductPage=(props)=>{
return <div>
    <h2>{props.title}</h2>
    <h3>`Rs${props.price}`</h3>
    <img src={props.imageUrl}></img>
</div>
}
export default ProductPage