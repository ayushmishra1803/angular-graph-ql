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
  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "INR") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe((res: any) => {
        console.log(res.data);
        console.log(res.loading);
        console.log(res.error);
      });
  }
}
