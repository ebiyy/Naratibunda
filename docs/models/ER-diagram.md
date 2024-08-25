# NarratiAct ER図

```mermaid
erDiagram
    EXPLORER ||--o{ NARRATIVE : "creates"
    EXPLORER ||--o{ PERSONA : "develops"
    NARRATIVE ||--|{ STORY_SEGMENT : "consists of"
    STORY_SEGMENT ||--o{ PROJECT : "generates"
    PROJECT ||--o{ INSIGHT : "yields"
    EXPLORER ||--o{ INSIGHT : "gains"
    INSIGHT ||--o{ ATTRIBUTE : "unlocks"
    PERSONA ||--o{ ATTRIBUTE : "possesses"
    PROJECT ||--o{ PROGRESS_LOG : "records"
    EXPLORER ||--o{ PROGRESS_LOG : "maintains"

    EXPLORER {
        int id
        string name
        date created_at
    }
    NARRATIVE {
        int id
        int explorer_id
        string title
        text description
        date created_at
    }
    STORY_SEGMENT {
        int id
        int narrative_id
        string title
        text content
        int order
    }
    PROJECT {
        int id
        int story_segment_id
        string title
        text description
        string status
        date created_at
        date completed_at
    }
    INSIGHT {
        int id
        int project_id
        int explorer_id
        text description
        int value
        date gained_at
    }
    PERSONA {
        int id
        int explorer_id
        string name
        text description
        date updated_at
    }
    ATTRIBUTE {
        int id
        string name
        text description
    }
    PROGRESS_LOG {
        int id
        int project_id
        int explorer_id
        text entry
        date logged_at
    }
```

## エンティティ説明

1. EXPLORER (探索者): システムの中心的なエンティティで、ユーザーを表します。
2. NARRATIVE (ナラティブ): 探索者の人生の物語を表現します。
3. STORY_SEGMENT (ストーリーセグメント): ナラティブの章や節を表現します。
4. PROJECT (プロジェクト): 具体的な行動や挑戦を表します。
5. INSIGHT (洞察): プロジェクト完了時に得られる経験や気づきを表します。
6. PERSONA (ペルソナ): 探索者の特性や性格を表現します。
7. ATTRIBUTE (資質): 探索者が獲得した能力や特性を表します。
8. PROGRESS_LOG (進捗記録): プロジェクトの進行状況や結果を記録します。
