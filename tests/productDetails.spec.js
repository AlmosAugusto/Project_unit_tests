const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

  // https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery
    // Teste se o retorno da função é um array.
    expect(Array.isArray( productDetails('Mascara', 'Alcool'))).toBeTruthy();

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Mascara', 'Alcool')).toHaveLength(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Alcool', "Mascara")).toBe('object')

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Mascara', 'Alcool')[0]).not.toEqual(productDetails('Mascara', 'Alcool')[1]);
    
    // Teste se os dois productIds, terminam com 123.
    expect(productDetails('Mascara','Alcool')[0].details.productId.endsWith('123')).toBeTruthy();
    expect(productDetails('Mascara','Alcool')[1].details.productId.endsWith('123')).toBeTruthy();
  
  });
});
