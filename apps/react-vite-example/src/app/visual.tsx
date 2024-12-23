import React from 'react';

import { Background, Edge, Node, Position, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const data = {
  topics: [
    // {
    //   topicName: 'global',
    //   events: [
    //     {
    //       eventKey: 'order.paid',
    //       publishers: [
    //         {
    //           type: 'publisher',
    //           eventKey: 'order.paid',
    //           data: {
    //             readable_typefrom: 'POS',
    //             amount: 3.35,
    //             sub_total: 3.35,
    //             items_count: 5,
    //             amount_before_discount: 3.35,
    //             discount_value: 0,
    //             redeemed_amount: 0,
    //             redeem_amount_points: 0,
    //             created_at: '2024-12-12 01:23 AM',
    //             type_from: 0,
    //             payments: [
    //               {
    //                 id: 1,
    //                 slug: 'cash',
    //                 requires_code: true,
    //                 splittable: true,
    //                 repeatable: false,
    //                 name: 'Cash',
    //                 name_ar: 'Cash',
    //                 payment_method_id: 1,
    //                 amount: 12,
    //                 readable_payment_method: 'Cash',
    //                 extra: '0',
    //               },
    //             ],
    //             items: [
    //               {
    //                 id: 1001136,
    //                 name: 'Abc Wellness Water 330ml',
    //                 name_ar: 'مياه ايه بي سي ويلنس ٣٣٠مل',
    //                 price: 0.1,
    //                 price_before_offer: 0,
    //                 redeemable: true,
    //                 barcodes: {
    //                   '6271021090118': {
    //                     id: '6271021090118',
    //                     item_id: 1001136,
    //                     quantity: 1,
    //                   },
    //                 },
    //                 barcodeIds: ['6271021090118'],
    //                 quantity: 1,
    //               },
    //               {
    //                 id: 1001075,
    //                 name: 'Perrier Spark Mineral Water Glass Bottle 330ml',
    //                 name_ar: 'مياه فوارة بيرير زجاج 330مل',
    //                 price: 0.45,
    //                 price_before_offer: 0,
    //                 redeemable: true,
    //                 barcodes: {
    //                   '3179730011857': {
    //                     id: '3179730011857',
    //                     item_id: 1001075,
    //                     quantity: 1,
    //                   },
    //                 },
    //                 barcodeIds: ['3179730011857'],
    //                 quantity: 1,
    //               },
    //               {
    //                 id: 1001100,
    //                 name: 'Trolley Abraaj Water 330ml',
    //                 name_ar: 'مياه ترولي أبراج ٣٣٠مل',
    //                 price: 0.1,
    //                 price_before_offer: 0,
    //                 redeemable: true,
    //                 barcodes: {
    //                   '6271100123027': {
    //                     id: '6271100123027',
    //                     item_id: 1001100,
    //                     quantity: 1,
    //                   },
    //                   '6271100120101': {
    //                     id: '6271100120101',
    //                     item_id: 1001100,
    //                     quantity: 1,
    //                   },
    //                   '6788024715141': {
    //                     id: '6788024715141',
    //                     item_id: 1001100,
    //                     quantity: 1,
    //                   },
    //                 },
    //                 barcodeIds: [
    //                   '6271100123027',
    //                   '6271100120101',
    //                   '6788024715141',
    //                 ],
    //                 quantity: 1,
    //               },
    //               {
    //                 id: 1001019,
    //                 name: 'Schweppes Tonic Water 150ml',
    //                 name_ar: 'مياه تونيك شويبس 150مل',
    //                 price: 0.2,
    //                 price_before_offer: 0,
    //                 redeemable: true,
    //                 barcodes: {
    //                   '90492310': {
    //                     id: '90492310',
    //                     item_id: 1001019,
    //                     quantity: 1,
    //                   },
    //                 },
    //                 barcodeIds: ['90492310'],
    //                 quantity: 1,
    //               },
    //               {
    //                 id: 1000930,
    //                 name: 'Dream Water Relaxation Shot Snoozeberry',
    //                 name_ar: 'مياه دريم ريلاكسيشن سنوز بيري',
    //                 price: 2.5,
    //                 price_before_offer: 0,
    //                 redeemable: true,
    //                 barcodes: {
    //                   '857430002056': {
    //                     id: '857430002056',
    //                     item_id: 1000930,
    //                     quantity: 1,
    //                   },
    //                 },
    //                 barcodeIds: ['857430002056'],
    //                 quantity: 1,
    //               },
    //             ],
    //             redeem_amount: '0.000',
    //             rating: null,
    //             id: '1001011733959424',
    //             local_id: '1001011733959424',
    //             unique_code: '1001011733959424',
    //             status: 1,
    //             readable_status: 'Paid',
    //             isLocal: true,
    //             transaction_type: 1,
    //             cashier_name: 'Essawy',
    //             session_id: 799,
    //           },
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 14,
    //             column: 9,
    //             codeBlock:
    //               "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
    //           },
    //           calledCount: 2,
    //           successCount: 2,
    //           errorCount: 0,
    //         },
    //       ],
    //       subscribers: [
    //         {
    //           type: 'subscriber',
    //           eventKey: 'order.paid',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 25,
    //             column: 9,
    //             codeBlock:
    //               "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
    //           },
    //           calledCount: 2,
    //           successCount: 2,
    //           errorCount: 0,
    //         },
    //       ],
    //     },
    //     {
    //       eventKey: ['order.paid', 'user.logout'],
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'SCANNER_EVENTS.SCAN_BARCODE',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'FREEZE_UI',
    //       publishers: [
    //         {
    //           type: 'publisher',
    //           eventKey: 'FREEZE_UI',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 14,
    //             column: 9,
    //             codeBlock:
    //               "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
    //           },
    //           calledCount: 2,
    //           successCount: 2,
    //           errorCount: 0,
    //         },
    //       ],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'UNFREEZE_UI',
    //       publishers: [
    //         {
    //           type: 'publisher',
    //           eventKey: 'UNFREEZE_UI',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 14,
    //             column: 9,
    //             codeBlock:
    //               "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
    //           },
    //           calledCount: 2,
    //           successCount: 2,
    //           errorCount: 0,
    //         },
    //       ],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: ['order.paid', 'checkout-back'],
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'backend-error',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: [
    //         'customer-removed',
    //         'order.paid',
    //         'STASH_SALE',
    //         'VOID_SALE',
    //         'user.logout',
    //         'product.selected',
    //         'product.unselected',
    //       ],
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'PRINT_DECLINED_RECEIPT',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'user.logout',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: ['receipt.printed'],
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'user.login',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: ['order.paid', 'VOID_SALE', 'STASH_SALE', 'user.logout'],
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'clear-search-input',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'reconciliation_receipt.printed',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'user.end_shift',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'print.reconciliation_receipt',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'SHOW_CART_COUPONS',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'customer-removed',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'SHOW_SUSPEND_DIALOG',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'SHOW_VOID_DIALOG',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'open-product-search-dialog',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'VOID_SALE',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'LOGGER_EVENTS.VOID_SALE',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'STASH_SALE',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'VOID_STASHED_SALE',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'RETRIEVE_STASHED_SALE',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'order.created',
    //       publishers: [
    //         {
    //           type: 'publisher',
    //           eventKey: 'order.created',
    //           data: {
    //             readable_typefrom: 'POS',
    //             amount: 3.35,
    //             sub_total: 3.35,
    //             items_count: 5,
    //             amount_before_discount: 3.35,
    //             discount_value: 0,
    //             redeemed_amount: 0,
    //             redeem_amount_points: 0,
    //             created_at: '2024-12-12 01:23 AM',
    //             type_from: 0,
    //             payments: [
    //               {
    //                 id: 1,
    //                 slug: 'cash',
    //                 requires_code: true,
    //                 splittable: true,
    //                 repeatable: false,
    //                 name: 'Cash',
    //                 name_ar: 'Cash',
    //                 payment_method_id: 1,
    //                 amount: 12,
    //                 readable_payment_method: 'Cash',
    //                 extra: '0',
    //               },
    //             ],
    //             items: [
    //               {
    //                 id: 1001136,
    //                 name: 'Abc Wellness Water 330ml',
    //                 name_ar: 'مياه ايه بي سي ويلنس ٣٣٠مل',
    //                 price: 0.1,
    //                 price_before_offer: 0,
    //                 redeemable: true,
    //                 barcodes: {
    //                   '6271021090118': {
    //                     id: '6271021090118',
    //                     item_id: 1001136,
    //                     quantity: 1,
    //                   },
    //                 },
    //                 barcodeIds: ['6271021090118'],
    //                 quantity: 1,
    //               },
    //               {
    //                 id: 1001075,
    //                 name: 'Perrier Spark Mineral Water Glass Bottle 330ml',
    //                 name_ar: 'مياه فوارة بيرير زجاج 330مل',
    //                 price: 0.45,
    //                 price_before_offer: 0,
    //                 redeemable: true,
    //                 barcodes: {
    //                   '3179730011857': {
    //                     id: '3179730011857',
    //                     item_id: 1001075,
    //                     quantity: 1,
    //                   },
    //                 },
    //                 barcodeIds: ['3179730011857'],
    //                 quantity: 1,
    //               },
    //               {
    //                 id: 1001100,
    //                 name: 'Trolley Abraaj Water 330ml',
    //                 name_ar: 'مياه ترولي أبراج ٣٣٠مل',
    //                 price: 0.1,
    //                 price_before_offer: 0,
    //                 redeemable: true,
    //                 barcodes: {
    //                   '6271100123027': {
    //                     id: '6271100123027',
    //                     item_id: 1001100,
    //                     quantity: 1,
    //                   },
    //                   '6271100120101': {
    //                     id: '6271100120101',
    //                     item_id: 1001100,
    //                     quantity: 1,
    //                   },
    //                   '6788024715141': {
    //                     id: '6788024715141',
    //                     item_id: 1001100,
    //                     quantity: 1,
    //                   },
    //                 },
    //                 barcodeIds: [
    //                   '6271100123027',
    //                   '6271100120101',
    //                   '6788024715141',
    //                 ],
    //                 quantity: 1,
    //               },
    //               {
    //                 id: 1001019,
    //                 name: 'Schweppes Tonic Water 150ml',
    //                 name_ar: 'مياه تونيك شويبس 150مل',
    //                 price: 0.2,
    //                 price_before_offer: 0,
    //                 redeemable: true,
    //                 barcodes: {
    //                   '90492310': {
    //                     id: '90492310',
    //                     item_id: 1001019,
    //                     quantity: 1,
    //                   },
    //                 },
    //                 barcodeIds: ['90492310'],
    //                 quantity: 1,
    //               },
    //               {
    //                 id: 1000930,
    //                 name: 'Dream Water Relaxation Shot Snoozeberry',
    //                 name_ar: 'مياه دريم ريلاكسيشن سنوز بيري',
    //                 price: 2.5,
    //                 price_before_offer: 0,
    //                 redeemable: true,
    //                 barcodes: {
    //                   '857430002056': {
    //                     id: '857430002056',
    //                     item_id: 1000930,
    //                     quantity: 1,
    //                   },
    //                 },
    //                 barcodeIds: ['857430002056'],
    //                 quantity: 1,
    //               },
    //             ],
    //             redeem_amount: '0.000',
    //             rating: null,
    //             id: '1001011733959424',
    //             local_id: '1001011733959424',
    //             unique_code: '1001011733959424',
    //             status: 1,
    //             readable_status: 'Paid',
    //             isLocal: true,
    //             transaction_type: 1,
    //             cashier_name: 'Essawy',
    //             session_id: 799,
    //           },
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 14,
    //             column: 9,
    //             codeBlock:
    //               "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
    //           },
    //           calledCount: 2,
    //           successCount: 2,
    //           errorCount: 0,
    //         },
    //       ],
    //       subscribers: [
    //         {
    //           type: 'subscriber',
    //           eventKey: 'order.created',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 25,
    //             column: 9,
    //             codeBlock:
    //               "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
    //           },
    //           calledCount: 1,
    //           successCount: 1,
    //           errorCount: 0,
    //         },
    //       ],
    //     },
    //     {
    //       eventKey: ['order.paid'],
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'product.selected',
    //       publishers: [
    //         {
    //           type: 'publisher',
    //           eventKey: 'product.selected',
    //           data: {
    //             id: 1000930,
    //             name: 'Dream Water Relaxation Shot Snoozeberry',
    //             name_ar: 'مياه دريم ريلاكسيشن سنوز بيري',
    //             price: 2.5,
    //             price_before_offer: 0,
    //             redeemable: true,
    //             barcodes: {
    //               '857430002056': {
    //                 id: '857430002056',
    //                 item_id: 1000930,
    //                 quantity: 1,
    //               },
    //             },
    //           },
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 14,
    //             column: 9,
    //             codeBlock:
    //               "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
    //           },
    //           calledCount: 6,
    //           successCount: 6,
    //           errorCount: 0,
    //         },
    //       ],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'order.creating',
    //       publishers: [
    //         {
    //           type: 'publisher',
    //           eventKey: 'order.creating',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 14,
    //             column: 9,
    //             codeBlock:
    //               "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
    //           },
    //           calledCount: 2,
    //           successCount: 2,
    //           errorCount: 0,
    //         },
    //       ],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: ['order.failed', 'order.paid'],
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'product.emptyCart',
    //       publishers: [
    //         {
    //           type: 'publisher',
    //           eventKey: 'product.emptyCart',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 14,
    //             column: 9,
    //             codeBlock:
    //               "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
    //           },
    //           calledCount: 2,
    //           successCount: 2,
    //           errorCount: 0,
    //         },
    //       ],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'checkout-back',
    //       publishers: [
    //         {
    //           type: 'publisher',
    //           eventKey: 'checkout-back',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 14,
    //             column: 9,
    //             codeBlock:
    //               "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
    //           },
    //           calledCount: 1,
    //           successCount: 1,
    //           errorCount: 0,
    //         },
    //       ],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'receipt.printed',
    //       publishers: [
    //         {
    //           type: 'publisher',
    //           eventKey: 'receipt.printed',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 14,
    //             column: 9,
    //             codeBlock:
    //               "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
    //           },
    //           calledCount: 1,
    //           successCount: 1,
    //           errorCount: 0,
    //         },
    //       ],
    //       subscribers: [],
    //     },
    //   ],
    // },
    // {
    //   topicName: 'Topic-1',
    //   events: [
    //     {
    //       eventKey: 'SHOW_ERROR',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'SESSION_NOT_FOUND',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //   ],
    // },
    // {
    //   topicName: 'Topic-2',
    //   events: [
    //     {
    //       eventKey: 'COMMANDS',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: 'SUCCESS',
    //       publishers: [],
    //       subscribers: [
    //         {
    //           type: 'subscriber',
    //           eventKey: 'SUCCESS',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 25,
    //             column: 9,
    //             codeBlock:
    //               "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
    //           },
    //           calledCount: 2,
    //           successCount: 2,
    //           errorCount: 0,
    //         },
    //       ],
    //     },
    //     {
    //       eventKey: 'STATUS',
    //       publishers: [
    //         {
    //           type: 'publisher',
    //           eventKey: 'STATUS',
    //           data: 'disconnected',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 14,
    //             column: 9,
    //             codeBlock:
    //               "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
    //           },
    //           calledCount: 123,
    //           successCount: 123,
    //           errorCount: 0,
    //         },
    //       ],
    //       subscribers: [
    //         {
    //           type: 'subscriber',
    //           eventKey: 'STATUS',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 25,
    //             column: 9,
    //             codeBlock:
    //               "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
    //           },
    //           calledCount: 1,
    //           successCount: 1,
    //           errorCount: 0,
    //         },
    //       ],
    //     },
    //     {
    //       eventKey: 'DECLINED',
    //       publishers: [],
    //       subscribers: [
    //         {
    //           type: 'subscriber',
    //           eventKey: 'DECLINED',
    //           originalPosition: {
    //             file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
    //             line: 25,
    //             column: 9,
    //             codeBlock:
    //               "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
    //           },
    //           calledCount: 1,
    //           successCount: 1,
    //           errorCount: 0,
    //         },
    //       ],
    //     },
    //     {
    //       eventKey: 'ERROR',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: ['SUCCESS', 'DECLINED', 'ERROR'],
    //       publishers: [],
    //       subscribers: [],
    //     },
    //     {
    //       eventKey: ['ERROR', 'DECLINED', 'SUCCESS'],
    //       publishers: [],
    //       subscribers: [],
    //     },
    //   ],
    // },
    {
      topicName: 'Topic-3',
      events: [
        {
          eventKey: 'STATUS',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'STATUS',
              data: 'ONLINE',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 360,
              successCount: 360,
              errorCount: 0,
            },
          ],
          subscribers: [
            {
              type: 'subscriber',
              eventKey: 'STATUS',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 25,
                column: 9,
                codeBlock:
                  "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
              },
              calledCount: 1,
              successCount: 1,
              errorCount: 0,
            },
            {
              type: 'subscriber',
              eventKey: 'STATUS',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 25,
                column: 9,
                codeBlock:
                  "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
              },
              calledCount: 1,
              successCount: 1,
              errorCount: 0,
            },
          ],
        },
        {
          eventKey: 'IsOnline',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'IsOnline',
              data: 'ONLINE',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 360,
              successCount: 360,
              errorCount: 0,
            },
            {
              type: 'publisher',
              eventKey: 'IsOnline',
              data: 'ONLINE',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 360,
              successCount: 360,
              errorCount: 0,
            },
          ],
          subscribers: [
            {
              type: 'subscriber',
              eventKey: 'IsOnline',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 25,
                column: 9,
                codeBlock:
                  "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
              },
              calledCount: 1,
              successCount: 1,
              errorCount: 0,
            },
            {
              type: 'subscriber',
              eventKey: 'IsOnline',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 25,
                column: 9,
                codeBlock:
                  "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
              },
              calledCount: 1,
              successCount: 1,
              errorCount: 0,
            },
            {
              type: 'subscriber',
              eventKey: 'IsOnline',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 25,
                column: 9,
                codeBlock:
                  "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
              },
              calledCount: 1,
              successCount: 1,
              errorCount: 0,
            },
            {
              type: 'subscriber',
              eventKey: 'IsOnline',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 25,
                column: 9,
                codeBlock:
                  "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
              },
              calledCount: 1,
              successCount: 1,
              errorCount: 0,
            },
            {
              type: 'subscriber',
              eventKey: 'IsOnline',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 25,
                column: 9,
                codeBlock:
                  "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
              },
              calledCount: 1,
              successCount: 1,
              errorCount: 0,
            },
          ],
        },
      ],
    },
    // {
    //   topicName: 'Topic-4',
    //   events: [],
    // },
    // {
    //   topicName: 'Topic-5',
    //   events: [
    //     {
    //       eventKey: 'SHOW_DECLINED_ORDER_DIALOG',
    //       publishers: [],
    //       subscribers: [],
    //     },
    //   ],
    // },
  ],
};

type Publisher = {
  type: string;
};

type Subscriber = {
  type: string;
};

type Event = {
  eventKey: string;
  publishers: Publisher[];
  subscribers: Subscriber[];
};

type Topic = {
  topicName: string;
  events: Event[];
};

type Data = {
  topics: Topic[];
};

const calcMaxNodes = (event: { subscribers: any[]; publishers: any[] }) => {
  return Math.max(event.publishers.length, event.subscribers.length);
};

const calcMaxNodesForTopic = (
  events: { subscribers: any[]; publishers: any[] }[]
) => {
  return events.reduce((previousValue, currentValue) => {
    return calcMaxNodes(currentValue) + previousValue;
  }, 0);
};

const calculateDynamicPositions = (
  baseX: number,
  baseY: number,
  count: number,
  spacing: number
) => {
  const positions = [];
  const totalHeight = (count - 1) * spacing;
  const startY = baseY - totalHeight / 2; // Centered vertically

  for (let i = 0; i < count; i++) {
    positions.push({
      x: baseX,
      y: startY + i * spacing,
    });
  }

  return positions;
};

const createElements = (
  data: Data,
  eventGap: number = 450 // Adjustable gap between events
): { nodes: Node[]; edges: Edge[] } => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  data.topics.forEach((topic, topicIndex) => {
    const topicMaxHeight = (calcMaxNodesForTopic(topic.events) * eventGap) / 2; // Account for gaps
    const topicNode: Node = {
      id: topic.topicName + topicIndex,
      data: { label: topic.topicName },
      position: {
        x: 0,
        y: topicIndex * (topicMaxHeight + 100), // Space topics vertically
      },
      style: {
        width: 800,
        height: topicMaxHeight,
        backgroundColor: `rgba(${100 * topicIndex},55,55,0.25)`,
      },
      type: 'group',
    };

    nodes.push(topicNode);

    topic.events.forEach((event, eventIndex) => {
      const eventCount = topic.events.length;
      const totalEventHeight = eventCount * (100 + eventGap);
      const startEventY = topicNode.style.height / 2 - totalEventHeight / 2;

      const eventBaseY = startEventY + eventIndex * (100 + eventGap); // Include gap

      // Event Node
      const eventNode: Node = {
        id: `${topic.topicName}-event-${event.eventKey}`,
        data: { label: event.eventKey },
        position: {
          x: topicNode.style.width / 2,
          y: eventBaseY,
        },
        style: {
          translate: '-50%',
        },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        parentId: topicNode.id,
        extent: 'parent',
      };
      nodes.push(eventNode);

      // Publishers
      const publisherPositions = calculateDynamicPositions(
        100, // Left column
        eventBaseY,
        event.publishers.length,
        100
      );
      event.publishers.forEach((publisher, pubIndex) => {
        const publisherNode: Node = {
          id: `${eventNode.id}-publisher-${pubIndex}`,
          data: { label: publisher.type },
          position: publisherPositions[pubIndex],
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          parentId: topicNode.id,
          extent: 'parent',
        };
        nodes.push(publisherNode);
        edges.push({
          id: `${eventNode.id}-to-publisher-${pubIndex}`,
          source: publisherNode.id,
          target: eventNode.id,
          type: 'smoothstep',
        });
      });

      // Subscribers
      const subscriberPositions = calculateDynamicPositions(
        600, // Right column
        eventBaseY,
        event.subscribers.length,
        100
      );
      event.subscribers.forEach((subscriber, subIndex) => {
        const subscriberNode: Node = {
          id: `${eventNode.id}-subscriber-${subIndex}`,
          data: { label: subscriber.type },
          position: subscriberPositions[subIndex],
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          parentId: topicNode.id,
          extent: 'parent',
        };
        nodes.push(subscriberNode);
        edges.push({
          id: `${eventNode.id}-to-subscriber-${subIndex}`,
          source: eventNode.id,
          target: subscriberNode.id,
          animated: true,
          type: 'smoothstep',
        });
      });
    });
  });

  return { nodes, edges };
};

type ReactFlowVisualizerProps = {
  data: Data;
};

const ReactFlowVisualizer: React.FC<ReactFlowVisualizerProps> = () => {
  const { nodes, edges } = createElements(data);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesConnectable={false}
        fitView
        attributionPosition="bottom-left"
        colorMode={'system'}
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowVisualizer;
