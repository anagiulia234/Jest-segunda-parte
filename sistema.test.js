const sistema = require('./sistema');

describe("Testarse uma palavra é lida da mesma forma de trás para frente", () => {
    test("Deve testar palavras palíndromas", () => { 
        expect(sistema.ehPalindromo("radar")).toBe(true);
        expect(sistema.ehPalindromo("Arara")).toBe(true);
        expect(sistema.ehPalindromo("reviver")).toBe(true);
        expect(sistema.ehPalindromo("livro")).toBe(false);
    });
    });

    describe("Testar uma palavra cheia de vogais" , () => {
        test("Contador de Vogais", () => {
            expect(sistema.contarVogais('escola')).toBe(3);
            expect(sistema.contarVogais('arquiteto')).toBe(5);
            expect(sistema.contarVogais('xyz')).toBe(0);
 });
    });

    describe("Testar o fatorial de números positivos", () => {
        test("Calculadora de Fatorial", () => {
            expect(sistema.calcularFatorial(5)).toBe(120);
            expect(sistema.calcularFatorial(0)).toBe(1);
            expect(() => sistema.calcularFatorial(-2)).toThrow('Não existe fatorial de número negativo');
        });
    });

    describe("Testar a remoção de duplicatas", () => {
        test("Removedor de Duplicatas", () => {
            expect(sistema.removerDuplicatas([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
        });
    });

    describe("Testar agendamento de consultas que caia em um dia de semana e outra que caia aos finais de semana", () => {
        test("Validador de Agendamento", () => {
          expect(sistema.agendarConsulta(new Date(2026, 10, 18))).toBe('Consulta agendada com sucesso');
          expect(() => sistema.agendarConsulta(new Date(2026, 10, 21))).toThrow();
        }); 
    });

    describe("Testar um número inteiro, um número já com decimais (ex: 15.5) e tentar passar um texto ('abc') para ver o sistema dar erro" , () => {
        test("Formatador de Moeda", () => {
            expect(sistema.formatarMoeda(15)).toBe('R$ 15,00');
            expect(sistema.formatarMoeda(15.5)).toBe('R$ 15,50');
            expect(() => sistema.formatarMoeda("abc")).toThrow('Valor inválido');
        });   
    });

    describe("Testem um CPF válido, um CPF curto demais e a pegadinha dos números repetidos", () => {
        test("Validador de CPF", () => {
            expect(sistema.validarCpfBasico("546.678.345-02")).toBe(true);
            expect(sistema.validarCpfBasico("54667834502")).toBe(true);
            expect(sistema.validarCpfBasico("546.456.789")).toBe(false);
            expect(sistema.validarCpfBasico("11111111111")).toBe(false);
        });
    });
  
    describe("Testar as regras isoladas (um idoso, um estudante, uma quarta-feira) e a regra de ouro: não acumular desconto. (ex: um estudante idoso na quarta-feira não pode pagar 0 reais, ele paga meia)", () => {
        test("Validador de Descontos", () => {
            expect(sistema.calcularIngresso(25, false, 1)).toBe(40);
            expect(sistema.calcularIngresso(20, true, 2)).toBe(20);
            expect(sistema.calcularIngresso(65, true, 3)).toBe(20);
        });
    });

   describe('Testar a classe da Conta Bancaria', () => {
  let conta;

  beforeEach(() => {
    conta = new sistema.ContaBancaria('Ana Giulia');
  });

  test('Deve criar uma conta bancaria e realizar operações', () => {
    expect(conta.obterSaldo()).toBe(0);
    expect(() => conta.sacar(1000)).toThrow('Saldo insuficiente');
    conta.depositar(300);
    conta.sacar(200);
    expect(conta.obterSaldo()).toBe(100);
  });
});

describe("Testar a consulta de clima avançado", () => {
    test("Deve obter o clima atual de uma cidade usando mock", async () => {
        const apiFalsa = {
            buscar: async () => ({ temperatura: 28 })
        };
        await expect(sistema.obterClima('São Paulo', apiFalsa)).resolves.toBe('A temperatura em São Paulo é de 28°C')
    });
});

