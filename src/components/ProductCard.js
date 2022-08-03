function ProductCard({ productCode, description, unitPrice }) {
  return (
    <div>
      <img src={`/images/products/${productCode.toLowerCase()}.jpg`} />
      <p>{description}</p>
      <p>{unitPrice}</p>
      <button>Ajouter au panier</button>
    </div>
  );
}

export default ProductCard;
