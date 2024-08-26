import React, { Component } from 'react'
import {Table} from 'react-bootstrap';

export default class ShowAllbooks extends Component {
constructor()
{
    super();
    this.state={Books:[]};
}
showallbooks()
{
    const BooksData = [
        {
          id: 1,
          title: "To Kill a Mockingbird",
          description: "A novel by Harper Lee published in 1960, widely regarded as a classic of modern American literature."
        },
        {
          id: 2,
          title: "1984",
          description: "A dystopian novel by George Orwell, published in 1949, that explores the dangers of totalitarianism."
        },
        {
          id: 3,
          title: "The Great Gatsby",
          description: "A novel by F. Scott Fitzgerald, published in 1925, that examines themes of decadence and the American Dream."
        },
        {
          id: 4,
          title: "Moby-Dick",
          description: "A novel by Herman Melville, published in 1851, that follows the adventures of the whaling ship Pequod."
        },
        {
          id: 5,
          title: "Pride and Prejudice",
          description: "A romantic novel by Jane Austen, published in 1813, that critiques the British landed gentry at the end of the 18th century."
        }
      ];
      
    this.setState({Books:BooksData})

}
componentDidMount()
{
    this.showallbooks();
}


  render() {
    const {Books}=this.state;
    return (
        <><div>Book info</div>
        <Table striped bordered hover size='StrictMode'>
              <tr>
                  <th>Book Id</th>
                  <th>Title</th>
                  <th>Description first_name</th>
              </tr>
  
              {
             Books.map(x => <tr>
                  <td> {x.id}  </td>
                  <td> {x.title}  </td>
                  <td> {x.description}  </td>  
              </tr>
              )
             }
  
  
          </Table></>
  
      )
}

}