using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> MsgValidacao { get; set; }

        protected List<string> MensagemValidacao
        {
            get { return MsgValidacao ?? (MsgValidacao = new List<string>()); }
        }

        protected void LimparMensagensValidacao()
        {
            MensagemValidacao.Clear();
        }

        protected void AdicionarCritica(string mensagem)
        {
            MensagemValidacao.Add(mensagem);
        }

        public string ObterMensagensValidacao()
        {
            return string.Join(". ", MensagemValidacao);
        }

        public abstract void Validate();

        public bool EhValido
        {
            get { return !MensagemValidacao.Any(); }
        }

    }
}
