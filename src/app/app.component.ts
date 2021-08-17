import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'graphql';
  constructor(private apollo: Apollo) {}
  companyDeatils;
  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            company {
              ceo
              coo
              cto
              founded
            }
          }
        `,
      })
      .valueChanges.subscribe((res: any) => {
        if (res.data) {
          this.companyDeatils = res.data;
          console.log(this.companyDeatils);
        }
        console.log(res.loading);
        console.log(res.error);
      });
  }
}
