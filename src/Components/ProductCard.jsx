import "../assets/scss/productCard.scss"

function TruncatedText({ text, maxLength }) {
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  } else {
    const truncatedText = text.substring(0, maxLength);
    return <span>{truncatedText}...</span>;
  }
}


function ProductCard({src , title , description , price}) {
  return (
    <>
    <div className='card'>
       <div className="image">
         <img src={src} />
        </div>
        <div className="content">
            <h2 className="title">{<TruncatedText text={title} maxLength={20}/>}</h2>
            <p>{<TruncatedText text={description} maxLength={40}/>}</p>
           <div className="price">
            <span>$</span><span style={{
                color : " rgb(118, 1, 211)"
            }}>{price}</span>
           </div>
            </div>  
    </div>
    </>
  )
}

export default ProductCard