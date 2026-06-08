/* AUTO-GENERATED from TextToSQLDora/outputs/eval_text2sql_test_v2_*.json
 * Source repo: https://github.com/Shane360129/TextToSQLDora
 * Do not edit by hand — re-run extract script.
 */
window.THESIS_DATA = {
  "meta": {
    "title": "消費級 GPU 上的封閉域 Text-to-SQL 微調",
    "subtitle": "SAMPLE_ERP 零售管理系統 · Llama-3.1-8B Base + DoRA + 三階段提示遞減",
    "author": "黃士銘",
    "advisor": "李文廷 教授",
    "org": "國立高雄師範大學 軟體工程與管理學系",
    "headline_ex": 98.73,
    "train_hours": 33.5,
    "vram": "16 GB",
    "train_samples": 11773,
    "method": "Llama-3.1-8B Base ＋ DoRA(r=32) ＋ 4-bit NF4 ＋ NEFTune ＋ 損失遮蔽 ＋ 三階段提示遞減（E1 schema+rules → E2 rules → E3 header）"
  },
  "modes": [
    {
      "label": "test × header",
      "stage": "E3",
      "note": "主結果：裸提示詞（內化驗證）",
      "total": 2052,
      "ex_correct": 2026,
      "ex_pct": 98.73,
      "em_string_pct": 98.34,
      "em_component_pct": 98.39,
      "prompt_tokens": 55.0,
      "infer_sec": 40.5
    },
    {
      "label": "test × rules",
      "stage": "E2",
      "note": "HEADER＋業務規則",
      "total": 2052,
      "ex_correct": 1994,
      "ex_pct": 97.17,
      "em_string_pct": 95.81,
      "em_component_pct": 96.93,
      "prompt_tokens": 879.0,
      "infer_sec": 41.0
    },
    {
      "label": "test × full",
      "stage": "E1",
      "note": "HEADER＋完整 schema＋規則",
      "total": 2052,
      "ex_correct": 1942,
      "ex_pct": 94.64,
      "em_string_pct": 92.74,
      "em_component_pct": 93.47,
      "prompt_tokens": 1970.0,
      "infer_sec": 41.9
    },
    {
      "label": "test × schema",
      "stage": "OOD",
      "note": "分布外控制組（訓練未見之提示組合）",
      "total": 2052,
      "ex_correct": 1571,
      "ex_pct": 76.56,
      "em_string_pct": 72.66,
      "em_component_pct": 75.29,
      "prompt_tokens": 1146.0,
      "infer_sec": 42.5
    },
    {
      "label": "val × header",
      "stage": "E3",
      "note": "驗證集一致性檢查",
      "total": 2052,
      "ex_correct": 2026,
      "ex_pct": 98.73,
      "em_string_pct": 98.25,
      "em_component_pct": 98.29,
      "prompt_tokens": 55.0,
      "infer_sec": 41.8
    }
  ],
  "byView": {
    "test × header": [
      {
        "view": "V_PurchaseOrder",
        "ex": 447,
        "count": 448,
        "pct": 99.8
      },
      {
        "view": "V_Payable",
        "ex": 191,
        "count": 192,
        "pct": 99.5
      },
      {
        "view": "V_Deposit",
        "ex": 123,
        "count": 124,
        "pct": 99.2
      },
      {
        "view": "V_Receivable",
        "ex": 106,
        "count": 107,
        "pct": 99.1
      },
      {
        "view": "V_Inventory",
        "ex": 209,
        "count": 211,
        "pct": 99.1
      },
      {
        "view": "V_Supplier",
        "ex": 100,
        "count": 101,
        "pct": 99.0
      },
      {
        "view": "V_Product",
        "ex": 164,
        "count": 167,
        "pct": 98.2
      },
      {
        "view": "V_SalesOrder",
        "ex": 469,
        "count": 478,
        "pct": 98.1
      },
      {
        "view": "V_BundleItem",
        "ex": 129,
        "count": 132,
        "pct": 97.7
      },
      {
        "view": "V_Transfer",
        "ex": 88,
        "count": 92,
        "pct": 95.7
      }
    ],
    "test × rules": [
      {
        "view": "V_Payable",
        "ex": 191,
        "count": 192,
        "pct": 99.5
      },
      {
        "view": "V_BundleItem",
        "ex": 131,
        "count": 132,
        "pct": 99.2
      },
      {
        "view": "V_Deposit",
        "ex": 123,
        "count": 124,
        "pct": 99.2
      },
      {
        "view": "V_PurchaseOrder",
        "ex": 444,
        "count": 448,
        "pct": 99.1
      },
      {
        "view": "V_Receivable",
        "ex": 106,
        "count": 107,
        "pct": 99.1
      },
      {
        "view": "V_Inventory",
        "ex": 208,
        "count": 211,
        "pct": 98.6
      },
      {
        "view": "V_Product",
        "ex": 163,
        "count": 167,
        "pct": 97.6
      },
      {
        "view": "V_Supplier",
        "ex": 98,
        "count": 101,
        "pct": 97.0
      },
      {
        "view": "V_Transfer",
        "ex": 89,
        "count": 92,
        "pct": 96.7
      },
      {
        "view": "V_SalesOrder",
        "ex": 441,
        "count": 478,
        "pct": 92.3
      }
    ],
    "test × full": [
      {
        "view": "V_Payable",
        "ex": 192,
        "count": 192,
        "pct": 100.0
      },
      {
        "view": "V_PurchaseOrder",
        "ex": 445,
        "count": 448,
        "pct": 99.3
      },
      {
        "view": "V_Deposit",
        "ex": 123,
        "count": 124,
        "pct": 99.2
      },
      {
        "view": "V_Receivable",
        "ex": 106,
        "count": 107,
        "pct": 99.1
      },
      {
        "view": "V_BundleItem",
        "ex": 129,
        "count": 132,
        "pct": 97.7
      },
      {
        "view": "V_Supplier",
        "ex": 97,
        "count": 101,
        "pct": 96.0
      },
      {
        "view": "V_Inventory",
        "ex": 202,
        "count": 211,
        "pct": 95.7
      },
      {
        "view": "V_Transfer",
        "ex": 87,
        "count": 92,
        "pct": 94.6
      },
      {
        "view": "V_SalesOrder",
        "ex": 427,
        "count": 478,
        "pct": 89.3
      },
      {
        "view": "V_Product",
        "ex": 134,
        "count": 167,
        "pct": 80.2
      }
    ],
    "test × schema": [
      {
        "view": "V_Payable",
        "ex": 191,
        "count": 192,
        "pct": 99.5
      },
      {
        "view": "V_Receivable",
        "ex": 106,
        "count": 107,
        "pct": 99.1
      },
      {
        "view": "V_Inventory",
        "ex": 202,
        "count": 211,
        "pct": 95.7
      },
      {
        "view": "V_Supplier",
        "ex": 96,
        "count": 101,
        "pct": 95.0
      },
      {
        "view": "V_Deposit",
        "ex": 111,
        "count": 124,
        "pct": 89.5
      },
      {
        "view": "V_SalesOrder",
        "ex": 423,
        "count": 478,
        "pct": 88.5
      },
      {
        "view": "V_BundleItem",
        "ex": 114,
        "count": 132,
        "pct": 86.4
      },
      {
        "view": "V_Transfer",
        "ex": 79,
        "count": 92,
        "pct": 85.9
      },
      {
        "view": "V_PurchaseOrder",
        "ex": 212,
        "count": 448,
        "pct": 47.3
      },
      {
        "view": "V_Product",
        "ex": 37,
        "count": 167,
        "pct": 22.2
      }
    ],
    "val × header": [
      {
        "view": "V_Receivable",
        "ex": 107,
        "count": 107,
        "pct": 100.0
      },
      {
        "view": "V_PurchaseOrder",
        "ex": 446,
        "count": 448,
        "pct": 99.6
      },
      {
        "view": "V_Supplier",
        "ex": 100,
        "count": 101,
        "pct": 99.0
      },
      {
        "view": "V_Payable",
        "ex": 190,
        "count": 192,
        "pct": 99.0
      },
      {
        "view": "V_SalesOrder",
        "ex": 471,
        "count": 478,
        "pct": 98.5
      },
      {
        "view": "V_BundleItem",
        "ex": 130,
        "count": 132,
        "pct": 98.5
      },
      {
        "view": "V_Deposit",
        "ex": 122,
        "count": 124,
        "pct": 98.4
      },
      {
        "view": "V_Inventory",
        "ex": 207,
        "count": 211,
        "pct": 98.1
      },
      {
        "view": "V_Transfer",
        "ex": 90,
        "count": 92,
        "pct": 97.8
      },
      {
        "view": "V_Product",
        "ex": 163,
        "count": 167,
        "pct": 97.6
      }
    ]
  },
  "byDifficulty": {
    "test × header": [
      {
        "diff": "easy",
        "ex": 771,
        "count": 778,
        "pct": 99.1
      },
      {
        "diff": "medium",
        "ex": 685,
        "count": 695,
        "pct": 98.6
      },
      {
        "diff": "hard",
        "ex": 409,
        "count": 410,
        "pct": 99.8
      },
      {
        "diff": "extra",
        "ex": 161,
        "count": 169,
        "pct": 95.3
      },
      {
        "diff": "all",
        "ex": 2026,
        "count": 2052,
        "pct": 98.7
      }
    ],
    "test × rules": [
      {
        "diff": "easy",
        "ex": 769,
        "count": 778,
        "pct": 98.8
      },
      {
        "diff": "medium",
        "ex": 685,
        "count": 695,
        "pct": 98.6
      },
      {
        "diff": "hard",
        "ex": 388,
        "count": 410,
        "pct": 94.6
      },
      {
        "diff": "extra",
        "ex": 152,
        "count": 169,
        "pct": 89.9
      },
      {
        "diff": "all",
        "ex": 1994,
        "count": 2052,
        "pct": 97.2
      }
    ],
    "test × full": [
      {
        "diff": "easy",
        "ex": 743,
        "count": 778,
        "pct": 95.5
      },
      {
        "diff": "medium",
        "ex": 674,
        "count": 695,
        "pct": 97.0
      },
      {
        "diff": "hard",
        "ex": 377,
        "count": 410,
        "pct": 92.0
      },
      {
        "diff": "extra",
        "ex": 148,
        "count": 169,
        "pct": 87.6
      },
      {
        "diff": "all",
        "ex": 1942,
        "count": 2052,
        "pct": 94.6
      }
    ],
    "test × schema": [
      {
        "diff": "easy",
        "ex": 606,
        "count": 778,
        "pct": 77.9
      },
      {
        "diff": "medium",
        "ex": 614,
        "count": 695,
        "pct": 88.3
      },
      {
        "diff": "hard",
        "ex": 222,
        "count": 410,
        "pct": 54.1
      },
      {
        "diff": "extra",
        "ex": 129,
        "count": 169,
        "pct": 76.3
      },
      {
        "diff": "all",
        "ex": 1571,
        "count": 2052,
        "pct": 76.6
      }
    ],
    "val × header": [
      {
        "diff": "easy",
        "ex": 773,
        "count": 778,
        "pct": 99.4
      },
      {
        "diff": "medium",
        "ex": 681,
        "count": 695,
        "pct": 98.0
      },
      {
        "diff": "hard",
        "ex": 410,
        "count": 410,
        "pct": 100.0
      },
      {
        "diff": "extra",
        "ex": 162,
        "count": 169,
        "pct": 95.9
      },
      {
        "diff": "all",
        "ex": 2026,
        "count": 2052,
        "pct": 98.7
      }
    ]
  }
};
