
function ItemDetail({ detail }){
    
    return(
        <>
            <p>
            Name: {detail.name} || Amount: {detail.amount} || Price: {detail.price}
            </p>
        </>
    )

}

export default ItemDetail