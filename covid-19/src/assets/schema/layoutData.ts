// const layout = ref({
//   model: {
//     generalData,
//     addressDataBilling,
//     addressDataPostal,
//     emailData
//   },
//   meta: [
//     {
//       name: 'general-data',
//       type: 'box',
//       classes: 'box tile is-parent is-vertical',
//       data: [
//         {
//           type: 'box',
//           name: 'title',
//           classes: 'tile is-child columns',
//           data: [
//             {
//               type: 'legend',
//               name: 'general-data',
//               classes: 'column is-12'
//             }
//           ]
//         },
//         {
//           type: 'box',
//           name: 'identifier-row',
//           classes: 'tile is-child columns',
//           data: [
//             {
//               name: 'serviceProviderId',
//               type: 'input',
//               subtype: 'text',
//               classes: 'column is-2',
//               disabled: true,
//               data: 'model.generalData.serviceProviderId',
//               hasIconsLeft: 'mdi mdi-identifier'
//             },
//             {
//               name: 'name',
//               type: 'input',
//               subtype: 'text',
//               classes: 'column is-10',
//               data: 'model.generalData.name',
//               required: true,
//               maxLength: 15,
//               validationPattern: '(?!\\s).{1,15}',
//               hasIconsLeft: 'alpha-a'
//             }
//           ]
//         },
//         {
//           type: 'box',
//           name: 'base-data',
//           classes: 'tile is-child columns',
//           data: [
//             {
//               name: 'contractDate',
//               type: 'input',
//               subtype: 'datetime',
//               classes: 'column is-2',
//               disabled: false,
//               data: 'model.generalData.contractDate',
//               hasIconsRight: 'calendar-month'
//             },
//             {
//               name: 'settlementPeriodLength',
//               type: 'input',
//               subtype: 'number',
//               classes: 'column is-2',
//               customClass: 'is-text-right',
//               min: 0,
//               max: 100,
//               data: 'model.generalData.settlementPeriodLength',
//               hasIconsLeft: 'numeric'
//             },
//             {
//               name: 'ifUrl',
//               type: 'input',
//               subtype: 'url',
//               classes: 'column is-8',
//               data: 'model.generalData.ifUrl',
//               required: true,
//               validationMessage: '',
//               validationPattern: '(?!\\s)https?://[a-z0-9\\-_\\.]*(:[0-9]+)?(/[\\w\\.?#=\\+]*)*',
//               hasIconsLeft: 'api'
//             }
//           ]
//         },
//         {
//           type: 'box',
//           name: 'account-data',
//           classes: 'tile is-child columns',
//           data: [
//             {
//               name: 'regNumber',
//               type: 'input',
//               subtype: 'text',
//               classes: 'column is-4',
//               disabled: false,
//               data: 'model.generalData.regNumber',
//               hasIconsLeft: 'alpha-a'
//             },
//             {
//               name: 'customerTaxNumber',
//               type: 'input',
//               subtype: 'text',
//               classes: 'column is-4',
//               data: 'model.generalData.customerTaxNumber',
//               hasIconsLeft: 'alpha-a'
//             },
//             {
//               name: 'iban',
//               type: 'input',
//               subtype: 'url',
//               classes: 'column is-4',
//               data: 'model.generalData.iban',
//               required: true,
//               hasIconsLeft: 'alpha-a'
//             }
//           ]
//         },
//         {
//           type: 'box',
//           name: 'account-data',
//           classes: 'tile is-child columns',
//           data: [
//             {
//               name: 'oversightOrganization',
//               type: 'input',
//               subtype: 'text',
//               classes: 'column is-6',
//               disabled: false,
//               data: 'model.generalData.oversightOrganization',
//               hasIconsLeft: 'alpha-a'
//             },
//             {
//               name: 'paymentTerm',
//               type: 'input',
//               subtype: 'number',
//               min: 0,
//               max: 1000,
//               classes: 'column is-6',
//               customClass: 'is-text-right',
//               data: 'model.generalData.paymentTerm',
//               hasIconsLeft: 'numeric'
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'address',
//       type: 'box',
//       classes: 'tile is-parent',
//       data: [
//         {
//           name: 'address-postal',
//           type: 'box',
//           classes: 'box tile is-6 is-vertical',
//           data: [
//             {
//               type: 'box',
//               name: 'title',
//               classes: 'columns',
//               data: [
//                 {
//                   type: 'legend',
//                   classes: 'column is-12',
//                   name: 'address-postal'
//                 }
//               ]
//             },
//             {
//               type: 'box',
//               name: 'address-postal-data-row',
//               classes: 'columns',
//               data: [
//                 {
//                   name: 'nationality',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataPostal.nationality',
//                   classes: 'column is-2',
//                   maxLength: 2,
//                   capitalize: true,
//                   hasIconsLeft: 'earth'
//                 },
//                 {
//                   name: 'country',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataPostal.country',
//                   classes: 'column is-10',
//                   hasIconsLeft: 'earth'
//                 }
//               ]
//             },
//             {
//               type: 'box',
//               name: 'address-postal-data-row',
//               classes: 'columns',
//               data: [
//                 {
//                   name: 'zipCode',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataPostal.zipCode',
//                   classes: 'column is-2',
//                   hasIconsLeft: 'map-marker'
//                 },
//                 {
//                   name: 'city',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataPostal.city',
//                   classes: 'column is-10',
//                   hasIconsLeft: 'city'
//                 }
//               ]
//             },
//             {
//               type: 'box',
//               name: 'address-postal-data-row',
//               classes: 'columns',
//               data: [
//                 {
//                   name: 'streetName',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataPostal.streetName',
//                   classes: 'column is-10',
//                   hasIconsLeft: 'map-marker'
//                 },
//                 {
//                   name: 'houseNumber',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataPostal.houseNumber',
//                   classes: 'column is-2',
//                   hasIconsLeft: 'map-marker'
//                 }
//               ]
//             },
//             {
//               type: 'box',
//               name: 'address-postal-data-row',
//               classes: 'columns',
//               data: [
//                 {
//                   name: 'otherAddress',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataPostal.otherAddress',
//                   classes: 'column is-12',
//                   hasIconsLeft: 'map-marker'
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           name: 'address-billing',
//           type: 'box',
//           classes: 'box tile is-6 is-vertical',
//           data: [
//             {
//               type: 'box',
//               name: 'title',
//               data: [
//                 {
//                   type: 'legend',
//                   name: 'address-billing'
//                 }
//               ]
//             },
//             {
//               type: 'box',
//               name: 'address-billing-data-row',
//               classes: 'columns',
//               data: [
//                 {
//                   name: 'nationality',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataBilling.nationality',
//                   classes: 'column is-2',
//                   maxLength: 2,
//                   capitalize: true,
//                   hasIconsLeft: 'earth'
//                 },
//                 {
//                   name: 'country',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataBilling.country',
//                   classes: 'column is-10',
//                   hasIconsLeft: 'earth'
//                 }
//               ]
//             },
//             {
//               type: 'box',
//               name: 'address-billing-data-row',
//               classes: 'columns',
//               data: [
//                 {
//                   name: 'zipCode',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataBilling.zipCode',
//                   classes: 'column is-2',
//                   hasIconsLeft: 'map-marker'
//                 },
//                 {
//                   name: 'city',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataBilling.city',
//                   classes: 'column is-10',
//                   hasIconsLeft: 'city'
//                 }
//               ]
//             },
//             {
//               type: 'box',
//               name: 'address-billing-data-row',
//               classes: 'columns',
//               data: [
//                 {
//                   name: 'streetName',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataBilling.streetName',
//                   classes: 'column is-10',
//                   hasIconsLeft: 'map-marker'
//                 },
//                 {
//                   name: 'houseNumber',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataBilling.houseNumber',
//                   classes: 'column is-2',
//                   hasIconsLeft: 'map-marker'
//                 }
//               ]
//             },
//             {
//               type: 'box',
//               name: 'address-billing-data-row',
//               classes: 'columns',
//               data: [
//                 {
//                   name: 'otherAddress',
//                   type: 'input',
//                   subtype: 'text',
//                   data: 'model.addressDataBilling.otherAddress',
//                   classes: 'column is-12',
//                   hasIconsLeft: 'map-marker'
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: 'emails',
//       type: 'box',
//       classes: 'tile is-parent',
//       data: [
//         {
//           name: 'email-addresses',
//           type: 'box',
//           classes: 'box tile is-12 is-vertical',
//           data: [
//             {
//               type: 'box',
//               name: 'title',
//               data: [
//                 {
//                   type: 'legend',
//                   name: 'email-addresses'
//                 }
//               ]
//             },
//             {
//               type: 'box',
//               name: 'email-addresses-data-row',
//               classes: 'tile is-vertical',
//               data: [
//                 {
//                   name: 'email',
//                   type: 'input',
//                   subtype: 'email',
//                   data: 'model.emailData.emails[0]',
//                   classes: 'column is-12',
//                   hasIconsLeft: 'mdi mdi-email'
//                 },
//                 {
//                   name: 'email',
//                   type: 'input',
//                   subtype: 'email',
//                   data: 'model.emailData.emails[1]',
//                   classes: 'column is-12',
//                   hasIconsLeft: 'mdi mdi-email'
//                 },
//                 {
//                   name: 'email',
//                   type: 'input',
//                   subtype: 'email',
//                   data: 'model.emailData.emails[2]',
//                   classes: 'column is-12',
//                   hasIconsLeft: 'mdi mdi-email'
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ]
// });
