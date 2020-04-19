namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido : Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public virtual Produto Produto { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (ProdutoId == 0)
                AdicionarCritica("Crítica - Informar qual o produto no item do pedido");

            if (Quantidade == 0)
                AdicionarCritica("Crítica - Quantidade do produto não pode ser zero");
        
        }
    }
}
