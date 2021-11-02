namespace app.interactions;

entity Pagamento {
  key ID_PGTO : Integer;
  CNPJ_DEB  : String(18);
  CNPJ_FAV  : String(18);
  COD_BANCO  : String(3);
  AGENCIA	: String(5);
  CONTA  : String(12);
  EMPRESA  : String(30);
  TIPO_PAGAMENTO  : String(2);
  DATA_VENC  : Date;
  MOEDA  : String(3);
  VALOR  : Decimal(13,2);
  COD_STATUS  : Integer;
  DESC_STAUTS  : String(10);
  DT_DECISAO  : Date;
  ID_AUTENTICACAO  : Integer;
  DATA_ENVIO  : Date;
};