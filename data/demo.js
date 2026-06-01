/**
 * Text-to-SQL 互動展示資料 / Interactive Text-to-SQL demo dataset
 *
 * 這是碩論「企業地端 Text-to-SQL 系統」的「精選範例」離線展示：
 * 使用者用自然語言提問，頁面示範微調模型會生成的 T-SQL 與查詢結果。
 * 為純前端展示，SQL 與結果皆為事先整理好的範例，並非即時模型推論。
 *
 * This is an OFFLINE, curated showcase of the Master's-thesis
 * "On-Premise Text-to-SQL" system. The SQL and result sets are
 * pre-authored examples, not live model inference.
 */

const demoData = {
  /* 模擬的 ERP / POS Schema（與履歷中的進銷存系統一致） */
  schema: [
    { table: 'Products', cols: ['ProductID', 'ProductName', 'CategoryID', 'UnitPrice', 'SafetyStock'] },
    { table: 'Inventory', cols: ['ProductID', 'WarehouseID', 'QtyOnHand', 'AvgCost'] },
    { table: 'Warehouses', cols: ['WarehouseID', 'WarehouseName'] },
    { table: 'SalesOrders', cols: ['OrderID', 'CustomerID', 'OrderDate', 'TotalAmount', 'Status'] },
    { table: 'SalesOrderItems', cols: ['OrderID', 'ProductID', 'Qty', 'UnitPrice', 'UnitCost'] },
    { table: 'Customers', cols: ['CustomerID', 'CustomerName', 'Region'] },
    { table: 'ARInvoices', cols: ['InvoiceID', 'CustomerID', 'InvoiceDate', 'DueDate', 'Amount', 'PaidAmount'] },
    { table: 'Members', cols: ['MemberID', 'MemberName', 'StoredValue'] },
  ],

  examples: [
    {
      id: 'low-stock',
      keywords: ['安全庫存', '低於', '庫存', '補貨', '缺貨', 'safety', 'stock', 'below', 'low', 'reorder', 'replenish'],
      question: {
        'zh-TW': '列出目前庫存量低於安全庫存的商品',
        en: 'List products whose stock is below the safety level',
      },
      sql:
        "SELECT p.ProductName, i.QtyOnHand, p.SafetyStock,\n" +
        "       (p.SafetyStock - i.QtyOnHand) AS Shortage\n" +
        "FROM Products AS p\n" +
        "JOIN Inventory AS i ON i.ProductID = p.ProductID\n" +
        "WHERE i.QtyOnHand < p.SafetyStock\n" +
        "ORDER BY Shortage DESC;",
      columns: {
        'zh-TW': ['商品名稱', '現有庫存', '安全庫存', '缺口'],
        en: ['Product', 'On Hand', 'Safety', 'Shortage'],
      },
      rows: {
        'zh-TW': [
          ['冷壓初榨橄欖油 500ml', 12, 50, 38],
          ['有機醬油 1L', 8, 40, 32],
          ['烘焙黑咖啡豆 1kg', 25, 60, 35],
          ['手工蘇打餅乾', 30, 50, 20],
        ],
        en: [
          ['Extra-Virgin Olive Oil 500ml', 12, 50, 38],
          ['Organic Soy Sauce 1L', 8, 40, 32],
          ['Roasted Coffee Beans 1kg', 25, 60, 35],
          ['Handmade Soda Crackers', 30, 50, 20],
        ],
      },
    },
    {
      id: 'top-products',
      keywords: ['暢銷', '熱銷', '銷售金額', '前五', '排行', '上月', '上個月', 'top', 'best', 'selling', 'revenue', 'last month'],
      question: {
        'zh-TW': '上個月銷售金額前五名的商品',
        en: 'Top 5 products by revenue last month',
      },
      sql:
        "SELECT TOP 5 p.ProductName,\n" +
        "       SUM(soi.Qty * soi.UnitPrice) AS Revenue\n" +
        "FROM SalesOrderItems AS soi\n" +
        "JOIN SalesOrders AS so ON so.OrderID = soi.OrderID\n" +
        "JOIN Products AS p ON p.ProductID = soi.ProductID\n" +
        "WHERE so.OrderDate >= DATEADD(MONTH, -1, GETDATE())\n" +
        "GROUP BY p.ProductName\n" +
        "ORDER BY Revenue DESC;",
      columns: {
        'zh-TW': ['商品名稱', '銷售金額'],
        en: ['Product', 'Revenue'],
      },
      rows: {
        'zh-TW': [
          ['冷壓初榨橄欖油 500ml', 128400],
          ['烘焙黑咖啡豆 1kg', 96250],
          ['有機醬油 1L', 74800],
          ['頂級烏龍茶 150g', 61200],
          ['手工蘇打餅乾', 52300],
        ],
        en: [
          ['Extra-Virgin Olive Oil 500ml', 128400],
          ['Roasted Coffee Beans 1kg', 96250],
          ['Organic Soy Sauce 1L', 74800],
          ['Premium Oolong Tea 150g', 61200],
          ['Handmade Soda Crackers', 52300],
        ],
      },
    },
    {
      id: 'overdue-ar',
      keywords: ['應收', '逾期', '欠款', '帳款', '超過', 'overdue', 'receivable', 'outstanding', 'unpaid', 'a/r'],
      question: {
        'zh-TW': '哪些客戶的應收帳款逾期超過 30 天？',
        en: 'Which customers have receivables overdue by more than 30 days?',
      },
      sql:
        "SELECT c.CustomerName,\n" +
        "       SUM(a.Amount - a.PaidAmount) AS Outstanding,\n" +
        "       DATEDIFF(DAY, MIN(a.DueDate), GETDATE()) AS DaysOverdue\n" +
        "FROM ARInvoices AS a\n" +
        "JOIN Customers AS c ON c.CustomerID = a.CustomerID\n" +
        "WHERE a.Amount > a.PaidAmount\n" +
        "  AND a.DueDate < DATEADD(DAY, -30, GETDATE())\n" +
        "GROUP BY c.CustomerName\n" +
        "ORDER BY Outstanding DESC;",
      columns: {
        'zh-TW': ['客戶名稱', '未收金額', '逾期天數'],
        en: ['Customer', 'Outstanding', 'Days Overdue'],
      },
      rows: {
        'zh-TW': [
          ['豐味食品行', 158600, 47],
          ['日昇連鎖超市', 92300, 39],
          ['好食多量販', 45800, 33],
        ],
        en: [
          ['Fengwei Foods', 158600, 47],
          ['Risun Supermarket', 92300, 39],
          ['HaoShihDuo Wholesale', 45800, 33],
        ],
      },
    },
    {
      id: 'inventory-value',
      keywords: ['庫存價值', '庫存總值', '加權平均', '成本', '各倉庫', 'wac', 'valuation', 'inventory value', 'warehouse'],
      question: {
        'zh-TW': '各倉庫以加權平均成本計算的庫存總值',
        en: 'Inventory value per warehouse using weighted average cost',
      },
      sql:
        "SELECT w.WarehouseName,\n" +
        "       SUM(i.QtyOnHand * i.AvgCost) AS InventoryValue\n" +
        "FROM Inventory AS i\n" +
        "JOIN Warehouses AS w ON w.WarehouseID = i.WarehouseID\n" +
        "GROUP BY w.WarehouseName\n" +
        "ORDER BY InventoryValue DESC;",
      columns: {
        'zh-TW': ['倉庫', '庫存總值'],
        en: ['Warehouse', 'Inventory Value'],
      },
      rows: {
        'zh-TW': [
          ['高雄總倉', 4820500],
          ['台南分倉', 2135800],
          ['台中分倉', 1487200],
        ],
        en: [
          ['Kaohsiung Main', 4820500],
          ['Tainan Branch', 2135800],
          ['Taichung Branch', 1487200],
        ],
      },
    },
    {
      id: 'monthly-margin',
      keywords: ['毛利', '每月', '月份', '趨勢', '本年', '今年', 'margin', 'gross profit', 'monthly', 'trend', 'this year'],
      question: {
        'zh-TW': '本年度每個月的銷售額與毛利',
        en: 'Monthly sales and gross profit for this year',
      },
      sql:
        "SELECT MONTH(so.OrderDate) AS Mon,\n" +
        "       SUM(soi.Qty * soi.UnitPrice) AS Sales,\n" +
        "       SUM(soi.Qty * (soi.UnitPrice - soi.UnitCost)) AS GrossProfit\n" +
        "FROM SalesOrders AS so\n" +
        "JOIN SalesOrderItems AS soi ON soi.OrderID = so.OrderID\n" +
        "WHERE YEAR(so.OrderDate) = YEAR(GETDATE())\n" +
        "GROUP BY MONTH(so.OrderDate)\n" +
        "ORDER BY Mon;",
      columns: {
        'zh-TW': ['月份', '銷售額', '毛利'],
        en: ['Month', 'Sales', 'Gross Profit'],
      },
      rows: {
        'zh-TW': [
          [1, 842000, 252600],
          [2, 768500, 224900],
          [3, 915300, 283740],
          [4, 1023400, 318250],
          [5, 1187600, 372910],
        ],
        en: [
          [1, 842000, 252600],
          [2, 768500, 224900],
          [3, 915300, 283740],
          [4, 1023400, 318250],
          [5, 1187600, 372910],
        ],
      },
    },
    {
      id: 'member-balance',
      keywords: ['會員', '儲值', '餘額', '點數', '低於', 'member', 'stored value', 'balance', 'top up'],
      question: {
        'zh-TW': '儲值金餘額低於 100 元的會員',
        en: 'Members with a stored-value balance below 100',
      },
      sql:
        "SELECT MemberName, StoredValue\n" +
        "FROM Members\n" +
        "WHERE StoredValue < 100\n" +
        "ORDER BY StoredValue ASC;",
      columns: {
        'zh-TW': ['會員姓名', '儲值餘額'],
        en: ['Member', 'Balance'],
      },
      rows: {
        'zh-TW': [
          ['張雅婷', 18],
          ['林志豪', 42],
          ['陳美玲', 60],
          ['王小明', 85],
        ],
        en: [
          ['Ya-Ting Chang', 18],
          ['Chih-Hao Lin', 42],
          ['Mei-Ling Chen', 60],
          ['Hsiao-Ming Wang', 85],
        ],
      },
    },
  ],
};
