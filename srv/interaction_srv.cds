using app.interactions from '../db/interactions';
service CatalogService {

 entity Pagamento
	as projection on interactions.Pagamento;
}
