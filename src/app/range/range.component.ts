import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Inject } from '@angular/core';

export interface Filter {
  name: string;
  from: number,
  to: number,
  active: boolean
}

const filter: Filter[] = [
  {name: 'Range', from: 0, to: 100, active: false}
];

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  dataSource = new TableDataSource(filter);
  displayedColumns: string[] = ['name', 'from', 'range', 'to'];
  filters: Filter[];
  slidersRefresh: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogRef: MatDialogRef<RangeComponent>
  ) {
    this.dataSource.data$.subscribe(data => this.filters = data);
    //this.dialogRef.afterOpened().subscribe(() => this.slidersRefresh.emit());
  }

  close(): void {
    this.dialogRef.close();
  }

  reset(): void {
    this.dataSource = new TableDataSource(this.filters.map(f => {
      f.active = false;
      f.from = 0;
      f.to = 100;
      return f;
    }));
  }

  ngOnInit(): void {
  }

}

export class TableDataSource extends DataSource<any> {
  data$: Observable<Filter[]>;
  constructor(data: Filter[]) {
    super();
    this.data$ = of(data);
  }
  connect(): Observable<Filter[]> {
    return this.data$;
  }

  disconnect() {}
}
