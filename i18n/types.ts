/**
 * Naratibundaのユビキタス言語を定義する型
 */
export type UbiquitousLanguage = {
	/**
	 * システムのユーザーを表す。人生の探求者としての役割を強調。
	 */
	explorer: string;

	/**
	 * ユーザーの人生の物語全体を表す概念。
	 */
	narrative: string;

	/**
	 * ナラティブの章や節を表す単位。人生の特定の期間や出来事を表現。
	 */
	storySegment: string;

	/**
	 * ユーザーが取り組む具体的な課題や挑戦。目標達成のための行動単位。
	 */
	project: string;

	/**
	 * プロジェクト完了時に得られる学びや気づき。個人の成長を促進する要素。
	 */
	insight: string;

	/**
	 * ユーザーの特性や性格を表現する概念。自己認識と成長の指標。
	 */
	persona: string;

	/**
	 * 探索者が獲得した能力や特性。個人のスキルセットを表現。
	 */
	attribute: string;

	/**
	 * プロジェクトの進行状況や結果の記録。成長の軌跡を追跡。
	 */
	progressLog: string;

	/**
	 * 人生のナラティブを視覚的に表現するインタラクティブマップ。
	 */
	lifeMap: string;

	/**
	 * ナラティブやプロジェクト間での重要な決断。人生の岐路を表現。
	 */
	existentialChoice: string;

	/**
	 * 多様な経験が豊かな成長をもたらす現象。全人的な発展を示す。
	 */
	multifacetedGrowth: string;

	/**
	 * ユーザー情報に基づいてナラティブを提案するシステム。
	 */
	narrativeAssistant: string;

	/**
	 * 経験を通じてペルソナが変化・成長するプロセス。
	 */
	selfEvolution: string;

	/**
	 * 利用可能なプロジェクトの一覧を表示する機能。
	 */
	opportunityBoard: string;

	/**
	 * 獲得した洞察の詳細記録。個人の成長履歴を管理。
	 */
	growthRecord: string;
};

/**
 * 翻訳オブジェクトの型定義
 */
export type TranslationObject = {
	ubiquitousLanguage: UbiquitousLanguage;
};
