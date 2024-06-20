import { CatalogWidget } from "../catalogWidget";
import { useCatalogStore } from "../store/catalog-store";

export function initCatalogFiltration() {
  const humans = useCatalogStore((state) => state.humans);
  const catalog = new CatalogWidget({ humans, is_auth: true });
}
