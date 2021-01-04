import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import { CardPequeno } from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from './img/foto.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= { MinhaFoto } 
          nome="Gabriela Pilegi Teixeira" 
          descricao="Eu sou Gabriela, tenho 26 anos e sou formada em Letras pela Universidade Estadual do Norte do Paraná. Meu primeiro contato com a programação foi durante o ensino médio, quando fiz um curso técnico em informática. Um período após a conclusão da minha faculdade, decidi mudar de área e migrar de vez para a área de desenvolvimento e sigo desde então estudando."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_960_720.png"
          titulo="Email:"
          texto="gabriela@gabriela.com"
        />
      </div>
        
          
      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn.pixabay.com/photo/2016/10/08/18/35/the-location-of-the-1724293_960_720.png"
          titulo="Endereço:"
          texto="Rua Sem Nome, 0000"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2016/10/cnpq-logo-7.png"           
          nome="Pesquisadora – Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) - Agosto/2017 - Julho/2018"
          descricao= "Pesquisa científica desenvolvida durante o curso de Letras, voltada para a área de Linguística. Análise de todos os artigos produzidos pelos professores que fizeram parte do PDE (Programa de Desenvolvimento Educacional) em 2014, com a proposta de verificar se estavam cumprindo na prática os objetivos do Programa e das Diretrizes Curriculares Estaduais do Paraná."
        />
        
        {/* <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Pesquisadora – Universidade Estadual do Norte do Paraná (UENP) - Janeiro/2017 - Julho/2017" 
        /> */}
      </div>
      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
