import { EmptyState, Layout, Page } from "@shopify/polaris";
// const next = require("next");

// var data = {
//   story1: {
//     title: "Lenovo PC",
//     description: "its just pc",
//     body: "Hello just buy it we dont have image",
//   },
// };
// var data2 = {
//   title: "Casper PC",
//   description: "its just pc",
//   body: "Hello just buy it we dont have image",
// };

// const cardCss = require("../public/css/CardView.css");

// const dataFile = require("../public/json/data.json");
// var txt = JSON.stringify(dataFile);

// const dataList = JSON.parse(txt);
// console.log(dataList.Stories[1].title);

// // const fileSystem = require("fs");
// // const socialCss = require("../public/css/SocialButtons.css");

// // const shoifyIndex = (
// //   <page>
// //     <Layout>
// //       <EmptyState
// //         heading="Ürünlerinizi tanıyın"
// //         action={{
// //           content: "Ürün  seçin",
// //           onAction: () => console.log("clicked"),
// //         }}
// //         image={img}
// //       >
// //         <p>Takip edilecek ürünleri seçin</p>
// //       </EmptyState>
// //     </Layout>
// //   </page>
// // );

// var list = dataList.Stories; //[data.story1, data2.story2];

// const Index = () => (
//   <div class="parent">
//     <div class="card card-2">
//       <div class="custom-header">Your Stories</div>
//       <hr></hr>

//       <a class="button" href="#">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="white"
//           width="36px"
//           height="36px"
//         >
//           <path d="M0 0h24v24H0z" fill="none" />
//           <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
//         </svg>
//         Add story
//       </a>
//       {list.length >= 1 &&
//         list.map((item, index) => {
//           return (
//             <div class="item-background">
//               <div class="item-title">{item.title}</div>
//             </div>
//           );
//         })}
//     </div>
//   </div>
// );

// const CardIndex = () => <div class="card card-1"></div>;
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";
class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <page>
        <TitleBar
          title="Sample App"
          primaryAction={{
            content: "Select products",
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
          <EmptyState
            heading="Ürünlerinizi tanıyın"
            action={{
              content: "Ürün  seçin",
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <p>Takip edilecek ürünleri seçin</p>
          </EmptyState>
        </Layout>
      </page>
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    console.log(idsFromResources);
  };
}
export default Index;
{
  /* <div class="circle-button"> <i class="fa fa-github"></i></div> */
  // <div href="#" class="circle-button">
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //         fill="white"
  //         width="36px"
  //         height="36px"
  //       >
  //         <path d="M0 0h24v24H0z" fill="none" />
  //         <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  //       </svg>
  //     </div>
}
