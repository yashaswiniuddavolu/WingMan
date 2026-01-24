import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import type { SearchRequest } from "@/utils/urlBuilders"
import { format } from "date-fns"

interface RecentSearchesProps {
    searches: SearchRequest[];
    onSelect: (search: SearchRequest) => void;
}

export function RecentSearches({ searches, onSelect }: RecentSearchesProps) {
    if (searches.length === 0) return null;

    return (
        <div className="space-y-3">
            <h3 className="text-sm font-medium text-sky-200/70 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Recent Searches
            </h3>
            <div className="grid grid-cols-1 gap-2">
                {searches.map((search, idx) => (
                    <Button 
                        key={idx} 
                        variant="ghost" 
                        className="justify-start h-auto py-2 px-3 w-full border border-white/10 bg-black/20 hover:bg-sky-500/20 text-sky-100"
                        onClick={() => onSelect(search)}
                    >
                        <div className="flex flex-col items-start gap-1 w-full">
                            <div className="flex justify-between w-full">
                                <span className="font-semibold text-xs text-white">{search.origin.code} → {search.destination.code}</span>
                                <span className="text-[10px] text-sky-200 bg-sky-900/50 border border-sky-500/30 px-1.5 py-0.5 rounded uppercase">
                                    {search.tripType}
                                </span>
                            </div>
                            <span className="text-xs text-sky-200/50">
                                {format(new Date(search.departDate), 'dd MMM')}
                                {search.tripType === 'roundtrip' && search.returnDate && ` - ${format(new Date(search.returnDate), 'dd MMM')}`}
                            </span>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}
