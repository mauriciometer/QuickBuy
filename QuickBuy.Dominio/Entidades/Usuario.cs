﻿using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
    public class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }   
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        /// <summary>
        /// Usuario pode ter 1 ou muitos pedidos.
        /// </summary>
        public ICollection<Pedido> Pedidos { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (string.IsNullOrEmpty(Email))
                AdicionarCritica("Email não foi informado");

            if (string.IsNullOrEmpty(Senha))
                AdicionarCritica("Senha não foi informada");
        }
    }
}
