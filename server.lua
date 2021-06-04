function SendAlert(source, data)
    TriggerClientEvent('ms-notify:sendAlert', source, data)
end

function SendAlert(source, id)
    TriggerClientEvent('ms-notify:removeAlert', source, id)
end