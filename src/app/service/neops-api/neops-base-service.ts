import {BehaviorSubject} from "rxjs";

export abstract class NeopsBaseService<ElementType> {
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public elements: BehaviorSubject<Array<ElementType>> = new BehaviorSubject<Array<ElementType>>([]);
  public totalCount: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  protected constructor() {
  }

  public abstract searchElements(searchQuery?: string, pageLength?: number, page?: number): void;

  protected handleSearchResult(searchResult: SearchResult<ElementType>) {
    this.loading.next(searchResult.loading);
    this.elements.next(searchResult.results || [])
    this.totalCount.next(searchResult.totalCount || 0)
  }
}

export interface SearchResult<ElementType> {
  results?: Array<ElementType>
  loading: boolean,
  totalCount?: number | null
}

export class NeopsBaseMockService extends NeopsBaseService<any>{
  constructor() {
    super();
  }
  searchElements(searchQuery: string | undefined, pageLength: number | undefined, page: number | undefined): void {
  }

}
