import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  Database,
  FlatNode,
  Item,
  Key,
} from '@cwj0911/matx-checkable-async-tree';
import { SelectionList } from '@cwj0911/ngutil-selection-list';
import { Observable, of, Subject } from 'rxjs';
import { delay, map } from 'rxjs/operators';

class NBAItem extends Item {
  constructor(
    public id: string,
    public name: string,
    public level: number,
    public parent?: NBAItem
  ) {
    super(id);
  }

  clone(): NBAItem {
    return new NBAItem(this.id, this.name, this.level, this.parent?.clone());
  }

  isEqual(other: NBAItem): boolean {
    return this.id === other.id;
  }

  getParent = () => this.parent ?? null;
}

const queryConferences = () => of(['Eastern', 'Western']);
const queryDivisions = (query: string) => {
  let result: string[] = [];
  switch (query) {
    case 'Eastern':
      result = ['Atlantic', 'Central', 'Southeast'];
      break;

    case 'Western':
      result = ['Northwest', 'Pacific', 'Southwest'];
      break;

    default:
      break;
  }
  return of(result);
};
const queryTeams = (query: string) => {
  let result: string[] = [];
  switch (query) {
    case 'Atlantic':
      result = [
        'Boston Celtics',
        'Brooklyn Nets',
        'New York Knicks',
        'Philadelphia 76ers',
        'Toronto Raptors',
      ];
      break;

    case 'Central':
      result = [
        'Chicago Bulls',
        'Cleveland Cavaliers',
        'Detroit Pistons',
        'Indiana Pacers',
        'Milwaukee Bucks',
      ];
      break;

    case 'Southeast':
      result = [
        'Atlanta Hawks',
        'Charlotte Hornets',
        'Miami Heat',
        'Orlando Magic',
        'Washington Wizards',
      ];
      break;

    case 'Northwest':
      result = [
        'Denver Nuggets',
        'Minnesota Timberwolves',
        'Oklahoma City Thunder',
        'Portland Trail Blazers',
        'Utah Jazz',
      ];
      break;

    case 'Pacific':
      result = [
        'Golden State Warriors',
        'Los Angeles Clippers',
        'Los Angeles Lakers',
        'Phoenix Suns',
        'Sacramento Kings',
      ];
      break;

    case 'Southwest':
      result = [
        'Dallas Mavericks',
        'Houston Rockets',
        'Memphis Grizzlies',
        'New Orleans Pelicans',
        'San Antonio Spurs',
      ];
      break;

    default:
      break;
  }
  return of(result);
};

const queryResults = [
  new NBAItem(
    'Boston Celtics',
    'Boston Celtics',
    4,
    new NBAItem(
      'Atlantic',
      'Atlantic',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Brooklyn Nets',
    'Brooklyn Nets',
    4,
    new NBAItem(
      'Atlantic',
      'Atlantic',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'New York Knicks',
    'New York Knicks',
    4,
    new NBAItem(
      'Atlantic',
      'Atlantic',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Philadelphia 76ers',
    'Philadelphia 76ers',
    4,
    new NBAItem(
      'Atlantic',
      'Atlantic',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Toronto Raptors',
    'Toronto Raptors',
    4,
    new NBAItem(
      'Atlantic',
      'Atlantic',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Chicago Bulls',
    'Chicago Bulls',
    4,
    new NBAItem(
      'Central',
      'Central',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Cleveland Cavaliers',
    'Cleveland Cavaliers',
    4,
    new NBAItem(
      'Central',
      'Central',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Detroit Pistons',
    'Detroit Pistons',
    4,
    new NBAItem(
      'Central',
      'Central',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Indiana Pacers',
    'Indiana Pacers',
    4,
    new NBAItem(
      'Central',
      'Central',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Milwaukee Bucks',
    'Milwaukee Bucks',
    4,
    new NBAItem(
      'Central',
      'Central',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Atlanta Hawks',
    'Atlanta Hawks',
    4,
    new NBAItem(
      'Southeast',
      'Southeast',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Charlotte Hornets',
    'Charlotte Hornets',
    4,
    new NBAItem(
      'Southeast',
      'Southeast',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Miami Heat',
    'Miami Heat',
    4,
    new NBAItem(
      'Southeast',
      'Southeast',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Orlando Magic',
    'Orlando Magic',
    4,
    new NBAItem(
      'Southeast',
      'Southeast',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Washington Wizards',
    'Washington Wizards',
    4,
    new NBAItem(
      'Southeast',
      'Southeast',
      3,
      new NBAItem('Eastern', 'Eastern', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Denver Nuggets',
    'Denver Nuggets',
    4,
    new NBAItem(
      'Northwest',
      'Northwest',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Minnesota Timberwolves',
    'Minnesota Timberwolves',
    4,
    new NBAItem(
      'Northwest',
      'Northwest',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Oklahoma City Thunder',
    'Oklahoma City Thunder',
    4,
    new NBAItem(
      'Northwest',
      'Northwest',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Portland Trail Blazers',
    'Portland Trail Blazers',
    4,
    new NBAItem(
      'Northwest',
      'Northwest',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Utah Jazz',
    'Utah Jazz',
    4,
    new NBAItem(
      'Northwest',
      'Northwest',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Golden State Warriors',
    'Golden State Warriors',
    4,
    new NBAItem(
      'Pacific',
      'Pacific',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Los Angeles Clippers',
    'Los Angeles Clippers',
    4,
    new NBAItem(
      'Pacific',
      'Pacific',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Los Angeles Lakers',
    'Los Angeles Lakers',
    4,
    new NBAItem(
      'Pacific',
      'Pacific',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Phoenix Suns',
    'Phoenix Suns',
    4,
    new NBAItem(
      'Pacific',
      'Pacific',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Sacramento Kings',
    'Sacramento Kings',
    4,
    new NBAItem(
      'Pacific',
      'Pacific',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Dallas Mavericks',
    'Dallas Mavericks',
    4,
    new NBAItem(
      'Southwest',
      'Southwest',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Houston Rockets',
    'Houston Rockets',
    4,
    new NBAItem(
      'Southwest',
      'Southwest',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'Memphis Grizzlies',
    'Memphis Grizzlies',
    4,
    new NBAItem(
      'Southwest',
      'Southwest',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'New Orleans Pelicans',
    'New Orleans Pelicans',
    4,
    new NBAItem(
      'Southwest',
      'Southwest',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
  new NBAItem(
    'San Antonio Spurs',
    'San Antonio Spurs',
    4,
    new NBAItem(
      'Southwest',
      'Southwest',
      3,
      new NBAItem('Western', 'Western', 2, new NBAItem('NBA', 'NBA', 1))
    )
  ),
];

class NBADatabase extends Database {
  initialData(): Observable<FlatNode[]> {
    return of([new FlatNode(new NBAItem('NBA', 'NBA', 1), 0, true)]).pipe(
      delay(200)
    );
  }

  getChildren(node: NBAItem): Observable<NBAItem[] | undefined> {
    if (node.id === 'NBA') {
      return queryConferences().pipe(
        map((names) =>
          names.map((name) => new NBAItem(name, name, 2, node.clone()))
        )
      );
    } else if (['Eastern', 'Western'].includes(node.id)) {
      return queryDivisions(node.id).pipe(
        map((names) =>
          names.map((name) => new NBAItem(name, name, 3, node.clone()))
        )
      );
    } else {
      return queryTeams(node.id).pipe(
        map((names) =>
          names.map((name) => new NBAItem(name, name, 4, node.clone()))
        )
      );
    }
  }

  isExpandable(node: NBAItem): boolean {
    return node.level < 4;
  }

  query(query: string): Observable<NBAItem[]> {
    return of(
      queryResults.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    ).pipe(delay(1000));
  }

  static getParent = (item: NBAItem) => item.getParent();

  readonly toggler = new Subject<NBAItem>();
}

@Component({
  selector: 'app-checkable-async-tree.component',
  templateUrl: 'checkable-async-tree.component.html',
  styleUrls: ['checkable-async-tree.component.scss'],
})
export class CheckableAsyncTreeComponent {
  database = new NBADatabase();
  selectionList = new SelectionList<NBAItem, Key>(true, [], true, (t) => t.id);

  formControl = new FormControl();

  getParentHierarchy(item: NBAItem) {
    const result: NBAItem[] = [];
    let parent: NBAItem | null = item;
    while (parent != null) {
      result.push(parent);
      parent = parent.getParent();
    }
    return result.reverse();
  }
}
