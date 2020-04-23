namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public string NomeArquivo { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Produto precisa ter um nome");

            if (string.IsNullOrEmpty(Descricao))
                AdicionarCritica("Produto precisa ter uma descricao");
        }
    }
}
