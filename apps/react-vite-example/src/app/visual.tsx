import React from 'react';

import { Background, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from './node';

const data = {
  topics: [
    {
      topicName: 'global',
      events: [
        {
          eventKey: 'order.paid',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'order.paid',
              data: {
                readable_typefrom: 'POS',
                amount: 3.35,
                sub_total: 3.35,
                items_count: 5,
                amount_before_discount: 3.35,
                discount_value: 0,
                redeemed_amount: 0,
                redeem_amount_points: 0,
                created_at: '2024-12-12 01:23 AM',
                type_from: 0,
                payments: [
                  {
                    id: 1,
                    slug: 'cash',
                    requires_code: true,
                    splittable: true,
                    repeatable: false,
                    name: 'Cash',
                    name_ar: 'Cash',
                    payment_method_id: 1,
                    amount: 12,
                    readable_payment_method: 'Cash',
                    extra: '0',
                  },
                ],
                items: [
                  {
                    id: 1001136,
                    name: 'Abc Wellness Water 330ml',
                    name_ar: 'مياه ايه بي سي ويلنس ٣٣٠مل',
                    price: 0.1,
                    price_before_offer: 0,
                    redeemable: true,
                    barcodes: {
                      '6271021090118': {
                        id: '6271021090118',
                        item_id: 1001136,
                        quantity: 1,
                      },
                    },
                    barcodeIds: ['6271021090118'],
                    quantity: 1,
                  },
                  {
                    id: 1001075,
                    name: 'Perrier Spark Mineral Water Glass Bottle 330ml',
                    name_ar: 'مياه فوارة بيرير زجاج 330مل',
                    price: 0.45,
                    price_before_offer: 0,
                    redeemable: true,
                    barcodes: {
                      '3179730011857': {
                        id: '3179730011857',
                        item_id: 1001075,
                        quantity: 1,
                      },
                    },
                    barcodeIds: ['3179730011857'],
                    quantity: 1,
                  },
                  {
                    id: 1001100,
                    name: 'Trolley Abraaj Water 330ml',
                    name_ar: 'مياه ترولي أبراج ٣٣٠مل',
                    price: 0.1,
                    price_before_offer: 0,
                    redeemable: true,
                    barcodes: {
                      '6271100123027': {
                        id: '6271100123027',
                        item_id: 1001100,
                        quantity: 1,
                      },
                      '6271100120101': {
                        id: '6271100120101',
                        item_id: 1001100,
                        quantity: 1,
                      },
                      '6788024715141': {
                        id: '6788024715141',
                        item_id: 1001100,
                        quantity: 1,
                      },
                    },
                    barcodeIds: [
                      '6271100123027',
                      '6271100120101',
                      '6788024715141',
                    ],
                    quantity: 1,
                  },
                  {
                    id: 1001019,
                    name: 'Schweppes Tonic Water 150ml',
                    name_ar: 'مياه تونيك شويبس 150مل',
                    price: 0.2,
                    price_before_offer: 0,
                    redeemable: true,
                    barcodes: {
                      '90492310': {
                        id: '90492310',
                        item_id: 1001019,
                        quantity: 1,
                      },
                    },
                    barcodeIds: ['90492310'],
                    quantity: 1,
                  },
                  {
                    id: 1000930,
                    name: 'Dream Water Relaxation Shot Snoozeberry',
                    name_ar: 'مياه دريم ريلاكسيشن سنوز بيري',
                    price: 2.5,
                    price_before_offer: 0,
                    redeemable: true,
                    barcodes: {
                      '857430002056': {
                        id: '857430002056',
                        item_id: 1000930,
                        quantity: 1,
                      },
                    },
                    barcodeIds: ['857430002056'],
                    quantity: 1,
                  },
                ],
                redeem_amount: '0.000',
                rating: null,
                id: '1001011733959424',
                local_id: '1001011733959424',
                unique_code: '1001011733959424',
                status: 1,
                readable_status: 'Paid',
                isLocal: true,
                transaction_type: 1,
                cashier_name: 'Essawy',
                session_id: 799,
              },
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 2,
              successCount: 2,
              errorCount: 0,
            },
          ],
          subscribers: [
            {
              type: 'subscriber',
              eventKey: 'order.paid',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 25,
                column: 9,
                codeBlock:
                  "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
              },
              calledCount: 2,
              successCount: 2,
              errorCount: 0,
            },
          ],
        },
        {
          eventKey: ['order.paid', 'user.logout'],
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'SCANNER_EVENTS.SCAN_BARCODE',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'FREEZE_UI',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'FREEZE_UI',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 2,
              successCount: 2,
              errorCount: 0,
            },
          ],
          subscribers: [],
        },
        {
          eventKey: 'UNFREEZE_UI',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'UNFREEZE_UI',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 2,
              successCount: 2,
              errorCount: 0,
            },
          ],
          subscribers: [],
        },
        {
          eventKey: ['order.paid', 'checkout-back'],
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'backend-error',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: [
            'customer-removed',
            'order.paid',
            'STASH_SALE',
            'VOID_SALE',
            'user.logout',
            'product.selected',
            'product.unselected',
          ],
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'PRINT_DECLINED_RECEIPT',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'user.logout',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: ['receipt.printed'],
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'user.login',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: ['order.paid', 'VOID_SALE', 'STASH_SALE', 'user.logout'],
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'clear-search-input',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'reconciliation_receipt.printed',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'user.end_shift',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'print.reconciliation_receipt',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'SHOW_CART_COUPONS',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'customer-removed',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'SHOW_SUSPEND_DIALOG',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'SHOW_VOID_DIALOG',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'open-product-search-dialog',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'VOID_SALE',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'LOGGER_EVENTS.VOID_SALE',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'STASH_SALE',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'VOID_STASHED_SALE',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'RETRIEVE_STASHED_SALE',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'order.created',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'order.created',
              data: {
                readable_typefrom: 'POS',
                amount: 3.35,
                sub_total: 3.35,
                items_count: 5,
                amount_before_discount: 3.35,
                discount_value: 0,
                redeemed_amount: 0,
                redeem_amount_points: 0,
                created_at: '2024-12-12 01:23 AM',
                type_from: 0,
                payments: [
                  {
                    id: 1,
                    slug: 'cash',
                    requires_code: true,
                    splittable: true,
                    repeatable: false,
                    name: 'Cash',
                    name_ar: 'Cash',
                    payment_method_id: 1,
                    amount: 12,
                    readable_payment_method: 'Cash',
                    extra: '0',
                  },
                ],
                items: [
                  {
                    id: 1001136,
                    name: 'Abc Wellness Water 330ml',
                    name_ar: 'مياه ايه بي سي ويلنس ٣٣٠مل',
                    price: 0.1,
                    price_before_offer: 0,
                    redeemable: true,
                    barcodes: {
                      '6271021090118': {
                        id: '6271021090118',
                        item_id: 1001136,
                        quantity: 1,
                      },
                    },
                    barcodeIds: ['6271021090118'],
                    quantity: 1,
                  },
                  {
                    id: 1001075,
                    name: 'Perrier Spark Mineral Water Glass Bottle 330ml',
                    name_ar: 'مياه فوارة بيرير زجاج 330مل',
                    price: 0.45,
                    price_before_offer: 0,
                    redeemable: true,
                    barcodes: {
                      '3179730011857': {
                        id: '3179730011857',
                        item_id: 1001075,
                        quantity: 1,
                      },
                    },
                    barcodeIds: ['3179730011857'],
                    quantity: 1,
                  },
                  {
                    id: 1001100,
                    name: 'Trolley Abraaj Water 330ml',
                    name_ar: 'مياه ترولي أبراج ٣٣٠مل',
                    price: 0.1,
                    price_before_offer: 0,
                    redeemable: true,
                    barcodes: {
                      '6271100123027': {
                        id: '6271100123027',
                        item_id: 1001100,
                        quantity: 1,
                      },
                      '6271100120101': {
                        id: '6271100120101',
                        item_id: 1001100,
                        quantity: 1,
                      },
                      '6788024715141': {
                        id: '6788024715141',
                        item_id: 1001100,
                        quantity: 1,
                      },
                    },
                    barcodeIds: [
                      '6271100123027',
                      '6271100120101',
                      '6788024715141',
                    ],
                    quantity: 1,
                  },
                  {
                    id: 1001019,
                    name: 'Schweppes Tonic Water 150ml',
                    name_ar: 'مياه تونيك شويبس 150مل',
                    price: 0.2,
                    price_before_offer: 0,
                    redeemable: true,
                    barcodes: {
                      '90492310': {
                        id: '90492310',
                        item_id: 1001019,
                        quantity: 1,
                      },
                    },
                    barcodeIds: ['90492310'],
                    quantity: 1,
                  },
                  {
                    id: 1000930,
                    name: 'Dream Water Relaxation Shot Snoozeberry',
                    name_ar: 'مياه دريم ريلاكسيشن سنوز بيري',
                    price: 2.5,
                    price_before_offer: 0,
                    redeemable: true,
                    barcodes: {
                      '857430002056': {
                        id: '857430002056',
                        item_id: 1000930,
                        quantity: 1,
                      },
                    },
                    barcodeIds: ['857430002056'],
                    quantity: 1,
                  },
                ],
                redeem_amount: '0.000',
                rating: null,
                id: '1001011733959424',
                local_id: '1001011733959424',
                unique_code: '1001011733959424',
                status: 1,
                readable_status: 'Paid',
                isLocal: true,
                transaction_type: 1,
                cashier_name: 'Essawy',
                session_id: 799,
              },
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 2,
              successCount: 2,
              errorCount: 0,
            },
          ],
          subscribers: [
            {
              type: 'subscriber',
              eventKey: 'order.created',
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
          eventKey: ['order.paid'],
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'product.selected',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'product.selected',
              data: {
                id: 1000930,
                name: 'Dream Water Relaxation Shot Snoozeberry',
                name_ar: 'مياه دريم ريلاكسيشن سنوز بيري',
                price: 2.5,
                price_before_offer: 0,
                redeemable: true,
                barcodes: {
                  '857430002056': {
                    id: '857430002056',
                    item_id: 1000930,
                    quantity: 1,
                  },
                },
              },
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 6,
              successCount: 6,
              errorCount: 0,
            },
          ],
          subscribers: [],
        },
        {
          eventKey: 'order.creating',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'order.creating',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 2,
              successCount: 2,
              errorCount: 0,
            },
          ],
          subscribers: [],
        },
        {
          eventKey: ['order.failed', 'order.paid'],
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'product.emptyCart',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'product.emptyCart',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 2,
              successCount: 2,
              errorCount: 0,
            },
          ],
          subscribers: [],
        },
        {
          eventKey: 'checkout-back',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'checkout-back',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 1,
              successCount: 1,
              errorCount: 0,
            },
          ],
          subscribers: [],
        },
        {
          eventKey: 'receipt.printed',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'receipt.printed',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 1,
              successCount: 1,
              errorCount: 0,
            },
          ],
          subscribers: [],
        },
      ],
    },
    {
      topicName: 'Topic-1',
      events: [
        {
          eventKey: 'SHOW_ERROR',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'SESSION_NOT_FOUND',
          publishers: [],
          subscribers: [],
        },
      ],
    },
    {
      topicName: 'Topic-2',
      events: [
        {
          eventKey: 'COMMANDS',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: 'SUCCESS',
          publishers: [],
          subscribers: [
            {
              type: 'subscriber',
              eventKey: 'SUCCESS',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 25,
                column: 9,
                codeBlock:
                  "    callback: (data: ExpectedData) => void\n  ) {\n    this.logMethod('subscribe', event, callback);\n    const isMultipleEvents = Array.isArray(event);\n    const _callback = this.constructCallback(callback);\n\n    if (isMultipleEvents) {",
              },
              calledCount: 2,
              successCount: 2,
              errorCount: 0,
            },
          ],
        },
        {
          eventKey: 'STATUS',
          publishers: [
            {
              type: 'publisher',
              eventKey: 'STATUS',
              data: 'disconnected',
              originalPosition: {
                file: '/@fs/D:/trolley-pos/node_modules/.vite/apps/deps/@enegix_events.js',
                line: 14,
                column: 9,
                codeBlock:
                  "\n  publish(event: string, data?: unknown) {\n    this.logMethod('publish', event, data);\n    console.log(\n      `Published '${event}' event with data: ${JSON.stringify(data)}`\n    );\n    this.emitter.emit(event, data);",
              },
              calledCount: 123,
              successCount: 123,
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
          ],
        },
        {
          eventKey: 'DECLINED',
          publishers: [],
          subscribers: [
            {
              type: 'subscriber',
              eventKey: 'DECLINED',
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
          eventKey: 'ERROR',
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: ['SUCCESS', 'DECLINED', 'ERROR'],
          publishers: [],
          subscribers: [],
        },
        {
          eventKey: ['ERROR', 'DECLINED', 'SUCCESS'],
          publishers: [],
          subscribers: [],
        },
      ],
    },
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
          ],
        },
      ],
    },
    {
      topicName: 'Topic-4',
      events: [],
    },
    {
      topicName: 'Topic-5',
      events: [
        {
          eventKey: 'SHOW_DECLINED_ORDER_DIALOG',
          publishers: [],
          subscribers: [],
        },
      ],
    },
  ],
};

const createElements = (data) => {
  const nodes = [];
  const edges = [];
  let id = 0;
  data.topics.forEach((topic) => {
    const topicNode = {
      id: `topic-${id++}`,
      data: { label: topic.topicName },
      position: { x: 100, y: id * 100 },
    };
    nodes.push(topicNode);
    topic.events.forEach((event) => {
      const eventNode = {
        id: `event-${id++}`,
        data: { label: event.eventKey },
        position: { x: 300, y: id * 100 },
      };
      nodes.push(eventNode);
      edges.push({
        id: `e${topicNode.id}-${eventNode.id}`,
        source: topicNode.id,
        target: eventNode.id,
      });
      event.publishers.forEach((publisher) => {
        const publisherNode = {
          id: `publisher-${id++}`,
          data: { label: publisher.type },
          position: { x: 500, y: id * 100 },
        };
        nodes.push(publisherNode);
        edges.push({
          id: `e${eventNode.id}-${publisherNode.id}`,
          source: eventNode.id,
          target: publisherNode.id,
        });
      });
      event.subscribers.forEach((subscriber) => {
        const subscriberNode = {
          id: `subscriber-${id++}`,
          data: { label: subscriber.type },
          position: { x: 500, y: id * 100 },
        };
        nodes.push(subscriberNode);
        edges.push({
          id: `e${eventNode.id}-${subscriberNode.id}`,
          source: eventNode.id,
          target: subscriberNode.id,
        });
      });
    });
  });
  return { nodes, edges };
};
const elements = createElements(data);

const nodeTypes = {
  custom: CustomNode,
};

function ReactFlowVisualizer() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={elements.nodes}
        edges={elements.edges}
        fitView
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}

export default ReactFlowVisualizer;
